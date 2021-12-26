var express= require('express');
var app=express();
app.get("/user/:id",function(req,res){
    res.send("ID:  " + req.params.id);
});
app.use('/user/:id', function(req,res,next){
	if (req.params.id==0){
		res.send("Provide another id!");
	}
	else{
		next();
	}
});

app.get("/",function(req,res){
	res.send("Welcome");
});
app.get("/user/:id",function(req,res){
		res.send("ID:  " + req.params.id);
});

app.listen(8081, function(){
	console.log("Server is running")
});

