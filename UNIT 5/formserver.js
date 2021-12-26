const express = require('express')
const app = express()
const path = require('path');
app.use(express.urlencoded({
  extended: true
}));
app.post('/submit-form', (req, res) => {
    const username = req.body.username
    res.send("<h1>Welcome " + username + "</h1>");
  });

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/form.html'));
    //__dirname : It will resolve to your project folder.
  });
app.listen(8080);
