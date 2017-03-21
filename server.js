var express = require('express');
var http = require("http");
var react = require("react");
var app = express();
var fs = require('fs');
var path = require('path');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var bodyParser = require("body-parser")//format body

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));


var url = 'mongodb://localhost:27017/test';

app.get('/index', function (req, res) {
	// console.log(__dirname);
	// res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));//返回html页面
});

app.get('/get', function (req, res) {
	// console.log(__dirname);
	// res.setHeader("Content-Type", "text/html");
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));//返回html页面
    var data = {"name" : "react", "type" : "js"};
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(data));
});

app.get("/insert", function (req, res) {
	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	    res.end("error")
	  } else {
	    console.log('Connection established to', url);
	    var collection = db.collection('person');
        var user = {name: 'modulus user', age: 22, roles: ['user']};

		// Insert some users
		collection.insert([user], function (err, result) {
			if (err) {
				console.log(err);
			} else {
				console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
			}
			//Close connection
			db.close();
		})
		res.end("success")
	  }
	});
})

app.get("/update", function (req, res) {
	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	    res.end("error")
	  } else {
	    console.log('Connection established to', url);
	    var collection = db.collection('person');
		// update some users
		collection.update({name: 'modulus user'}, {$set: {age: 23}}, function (err, numUpdated) {
			if (err) {
				console.log(err);
			} else if (numUpdated) {
				console.log('Updated Successfully %d document(s).', numUpdated);
			} else {
				console.log('No document found with defined "find" criteria!');
			}
			//Close connection
			db.close();
		});
		res.end("success")
	  }
	});
})

app.get("/find", function (req, res) {
	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	    res.end("error")
	  } else {
	    console.log('Connection established to', url);
	    var collection = db.collection('person');
		// update some users
		collection.find({name: req.query.name}).toArray(function (err, result) {
		  if (err) {
		    console.log(err);
		  } else if (result.length) {
		    console.log('Found:', result);
		    if (result.length == 1) {
		    	result = result[0];
		    	console.log("result :" + result)
		    }
		    res.end(JSON.stringify(result))
		  } else {
		    console.log('No document(s) found with defined "find" criteria!');
		  }
		  //Close connection
		  console.log("db close");
		  db.close();
		});
	  }
	});
})



http.createServer(app).listen(1337);