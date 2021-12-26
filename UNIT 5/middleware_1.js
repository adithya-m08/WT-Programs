//logs request based on time
var express= require('express');
var app=express();

//middleware function
var requesttime= function(req,res,next){
	req.requestTime=Date.now();
	next(); //calls next middleware
}
//how to use the middleware? using app.use

app.use(requesttime);
app.get('/', function(req,res){
	var responseText='A request was made! <br> ';
	responseText+="Time of request : " + req.requestTime;
	res.send(responseText);
});
app.listen(8081);  