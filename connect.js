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
function readFile(data, callback){
	MongoClient.connect(url, function(err, client) {
		if(err) {
	    	console.log(err);
		}

	  	const db = client.db('grocery_list_project')
	  	const collection = db.collection('Users')

		collection.findOne(data, function(err, user) {
			if(!user) {
				callback(err, 'failed')
			} else {
				callback(err, user)
			}
			client.close();
		});
	});
}

function dropCategory(user,list,category){
	MongoClient.connect(url, function(err, client) {
		if(err) {
	    	console.log(err);
		}
	const db = client.db('grocery_list_project')
	const collection = db.collection('Users')
	var myObj = collection.find({'user':user});
	//the indexes shouldnt be 0 they need to be the index of the thing were passing in
	delete myObj.lists[0].category[0];
	//then have to update the collection


}

module.exports = {
	readFile,
	dropCategory
}