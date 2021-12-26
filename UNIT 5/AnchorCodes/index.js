var express = require('express');
var app = express();
app.use(function(req,res,next){
	console.log("Got request at "+new Date().toString())
	//for(i in req)
	//	console.log(req[i])
	next()
})
app.use('/', function(req,res,next){
	console.log("Middleware 1 ")
	//for(i in req)
	//	console.log(req[i])
	next()
})
app.get('/', function(req, res,next){
   res.send("Hello world!");
   next()
});
app.use('/', function(req,res,next){
	console.log("Middleware 2")
	//for(i in req)
	//	console.log(req[i])
	next()
})
app.use(function(req,res){
	console.log("Middleware 3")
	//for(i in req)
	//	console.log(req[i])
})

app.get('/welcome/:id', function(req, res){
	res.send("Welcome to the Express "+req.params.id)
})
app.listen(3000);