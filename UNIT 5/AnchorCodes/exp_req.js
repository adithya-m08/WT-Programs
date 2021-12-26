var express = require("express"); // npm install express --save

var app = express();
//var MongoClient = require("mongo").MongoCLient;
var bodyParser = require('body-parser');
//var multer = require('multer')
//var upload = multer();

app.use(bodyParser.json()); 

// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: false })); 
//form-urlencoded

//app.use(upload.array()); 

app.get("/", function(req, res){
	res.send("Welcome to my page!!!")
})

/*app.get("/hello", function(req,res){
	console.log(req.query);
	console.log(req.body);
	for (var i in req.query)
		console.log(req.query[i])
//	MongoClient.collection("hello").find({})
	res.send("Hi There!!!")
})
app.post("/hello", function(req,res){ //creation of resource
	res.send("Hello Greeting Message saved!")
	console.log(req.body)
//	MongoClient.collection("hello").insert({})
})*/
var MongoClient = require("mongodb").MongoClient;
//var hellorouter = require("./hello.js")

//app.use("/hello", hellorouter); // http://localhost:3000/hello

//var studrouter = require("./student.js")

//app.use("/student", studrouter); // http://localhost:3000/student
app.get("/hello", function(req,res){
//	res.send("Hi There!!!")
	console.log(req.query);
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection("student").find(req.query).toArray(
			function(err,objs){
				res.send(objs)
			}
		)
	});
});

app.get("/hello/:id", function(req,res){
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection("student").findOne({srn:req.params.id},
			function(err,obj){
				res.send(obj)
			}
		)
	});
})

app.post("/hello", function(req,res){ //creation of resource
	MongoClient.connect('mongodb://localhost:27017',{
		useUnifiedTopology:true
	}, function(err,client){
		if(err) throw err;
		const db = client.db('newdb'); //use newdb;
		db.collection("student").insertOne(req.body,
			function(err,data){
				res.send("Saved Successfully!!")
			}
		)
	});
})

app.listen(3000, function(){
	console.log("Server listening on 3000...")
});