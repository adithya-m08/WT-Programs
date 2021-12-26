var express = require("express"); // npm install express --save

var app = express();

// Middleware Functions
// request - response (life cycle of a request)

// authentication
// parsing request
// response header (compression)
// Router

app.use(function(req, res, next){
	//task
	console.log("First MW Function")
	next();
})

app.use("/", function(req, res, next){
	//task
	console.log("Route MW Function 1")
	next();
})

app.use("/", function(req, res, next){
	//task
	console.log("Route MW Function 2")
	next();
})

app.get("/", function(req, res, next){
	console.log("Route Function")
	res.send("Welcome to my page!!!")
	next();
})

app.use("/", function(req, res, next){
	//task
	console.log("Route MW Function 3")
	next();
})

app.use(function(req, res){
	//task
	console.log("Last MW Function")
	//next();
})

app.listen(3000, function(){
	console.log("Server listening on 3000...")
});