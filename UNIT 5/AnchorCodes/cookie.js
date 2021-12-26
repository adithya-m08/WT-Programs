var express = require("express");

var app = express();

var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/",function(req,res){
	console.log(req.cookies.uname);
	//console.log(res.cookie("uname"));
	res.cookie("uname", "expressuser",{sameSite:true,secure:true}).send("Cookie set!!")
})
app.get("/setexp",function(req,res){
	console.log(req.cookies.uname);
	res.cookie("uname","newuser",{maxAge:5000}).send("Cookie set!!")
})
app.get("/delete",function(req,res){
	console.log(req.cookies.uname);
	res.clearCookie("uname").send("Cookie cleared!!")
})
app.listen(3000,function(){
	console.log("Server up at 3000")
})