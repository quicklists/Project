const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://Nick.s:student@ds014388.mlab.com:14388/grocery_list_project'

	/*create: function(data, callback){
		MongoClient.connect(url, function(err, client) {
		if(err) {
	    	console.log(err);
	  	} else {
	  		console.log('We are connected to mongodb!');
	  	}
	  	//setup for DB
	  	const db = client.db('grocery_list_project')
	  	const collection = db.collection('nick')
	  	if(data.type === "findOne"){
	  		collection.findOne(data.data)....
	  		{
	  			callback(err, user)
	  			client.close();
	  		}
	  	}
	  })
	},*/
function connectDB(callback) {
	MongoClient.connect(url, function(err, client) {
        if(err) {
            console.log(err);
        }
	    const db = client.db('grocery_list_project')
	    const collection = db.collection('Users')

	    callback(collection, client)
	});
}

function getListIndex(list, data) {
	var lists = data.lists

    for (var i = 0; i < lists.length; i++) {
		if (lists[i].name === list) {
			return i
		}
	}
}

function getCategoryIndex(list, category, data) {
	var listIndex = getListIndex(list, data)
    var categories = data.lists[listIndex].categories

	for(var i = 0; i < categories.length; i++) {
	    if (categories[i].name === category) {
	    	return i
	    }
	}
}

function readFile(email, callback){
	connectDB(function(collection, client) {
		collection.findOne({email: email}, function(err, user) {
			if(!user) {
				callback(err, 'failed')
			} else {
				callback(err, user)
			}
			client.close();
		});
	});
}



function updateDb(email,data)
{
	MongoClient.connect(url, function(err, client) {
		if(err) {
	    	console.log(err);
		}

	  	const db = client.db('grocery_list_project')
	  	const collection = db.collection('Users')

	  	collection.replaceOne(email, data);

	  	client.close();
	  });

}

function dropCategory(email, list, category) {
    readFile(email, function(err, user) {
    	var listIndex = getListIndex(list, user)
    	var categoryIndex = getCategoryIndex(list, category, user)

    	// fix so it doesnt leave a null
    	delete user.lists[listIndex].categories[categoryIndex];
    	console.log(user.lists[0]);
   		// updateDb(email, user)
    })
}
// tests drop category function
// dropCategory('nick@123.ca', 'grocery list', 'Produce')

function addRecord(record, table, callback) {
    MongoClient.connect(url, function(err, client) {
        if(err) {
	    	console.log(err);
		}
        const db = client.db('grocery_list_project')

	    db.collection(table).insertOne(record, function(err, res) {
        if (err){
            callback("error");
            throw err;
        } else {
    	    console.log("1 document inserted");
            callback("success");
        }
    	});
        client.close();
    });
}   
function deleteRecord(record,table, callback) {
    MongoClient.connect(url, function(err, client) {
        if(err) {
	    	console.log(err);
		}
        const db = client.db('grocery_list_project')
        
	    db.collection(table).deleteOne(record, function(err, res) {
        if (err){
            callback("error");
            throw err;
        } else {
            console.log("1 document deleted");
            callback("success");
    }
  });
  client.close();
    });
}

module.exports = {
	readFile,
	addRecord,
	updateDb,
    deleteRecord,
	dropCategory
}

// henrys unittest example to me (nick)
// var obj = {
// 	id:expect.anything(),
// 	name:expect.anything()
// }

// test("dbRead", (done)=>{
// 	readFile({data:"stuff"}, (err, data)=>{
// 		expect(data).toBe("failed");
// 		expect(data).toEqual(obj);
// 		done();
// 	})
// })

