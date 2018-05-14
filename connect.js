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

function createTable(newTable) {
	MongoClient.connect(url, function(err, client) {
		if(err) {
	    	console.log(err);
		}
		
		const db = client.db('grocery_list_project')
		
		db.createCollection(newTable, function(err, res) {
			if (err) throw err;
			console.log("Collection created!");
			client.close();
		});
	});
}

function addRecord(record, table) {
    MongoClient.connect(url, function(err, client) {
        if(err) {
	    	console.log(err);
		}
        const db = client.db('grocery_list_project')

	    db.collection(table).insertOne(record, function(err, res) {
        if (err) throw err;
    	    console.log("1 document inserted");
    	});
        client.close();
    });
}   

// function updateDB(email, data) {
	
// }

function dropCategory(email, listIndex, categoryIndex) {
    readFile(email, function(err, user) {
    	delete user.lists[listIndex].categories[categoryIndex]
   		// call an update function here
    })
}

module.exports = {
	readFile,
	addRecord,
	createTable,
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

