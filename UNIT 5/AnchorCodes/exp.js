var express = require("express"); // npm install express --save

var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); //populates req.body with the req message body or leaves it as null object

app.get("/", function(req, res){
	res.send("Welcome to my page!!!")
})

//var hellorouter = require("./hello.js")

//app.use("/hello", hellorouter); // http://localhost:3000/hello

var studrouter = require("./student.js")

app.use("/student", studrouter); // http://localhost:3000/student
app.get("/student",function())
app.listen(3000, function(){
	console.log("Server listening on 3000...")
});