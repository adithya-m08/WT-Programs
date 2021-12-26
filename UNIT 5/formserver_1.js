const express = require('express')
const app = express()
const path = require('path');
const url = require('url');

app.get('/submit-form', (req, res) => {
    const username = url.parse(req.url, true).query.username;
    res.send("<h1>Welcome " + username + "</h1>");
  });

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/form_1.html'));
  });
app.listen(8081);
