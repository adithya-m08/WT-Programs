var express= require('express');
var app=express();
//change the order of the middleware functions and observe what happens

app.use('/user/:id', function(req,res,next){
	console.log("ID:" + req.params.id);
	next();
});
app.use(function(req,res,next){
	console.log("/" + req.method);
	next();
}); 
app.get("/",function(req,res){
	res.send("Welcome");
});
app.get("/user/:id",function(req,res){
		res.send("ID:  " + req.params.id);
});
app.listen(8080, function(){
	console.log("Server is running")
});

