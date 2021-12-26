var express = require('express');
var app = express();

const middleware = (req,res,next)=>{
    console.log("Hello am Middleware function");
//  next();
}

app.get('/',function(req,res){
    res.send("<h1>Welcome to Express JS Home page</h1>");
});
app.get('/login',middleware,function(req,res){
    res.send("<h1>Login Here!!!</h1>")
});
app.get('/contact',middleware,function(req,res){
    res.send("<h1>Contact US</h1>");
})
// other HTTP methods are, app.get(),app.post(),app.put(),app.delete()
var server = app.listen(5000);