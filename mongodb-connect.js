// const MongoClient = require('mongodb').MongoClient;

// native drivers are libraries that allow database to contact with different languages such as Python, Node.jss
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log("hello hi",obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to mongodb server');

	const db = client.db('TodoApp');

	const p = db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err,result) => {
		if (err) {
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(result.ops,undefined,5));
	});



	db.collection('Users').insertOne({
		name: 'Nikita',
		age: '19',
		location: 'sdff',

	}, (err, result) => {
		if (err) {
			return console.log("Error");7
		}

		// console.log(JSON.stringify(result.ops,undefined,2));
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	});

	client.close();
});