var express = require('express');
var app = express();

app.get('/getabout', function (req, res) {
    res.send("GET Request Received at /getabout");
  });
app.post('/postfeedback', function (req, res) {
    console.log("POST Request Received at /postfeedback");
    res.send('Feedback Page');
})
app.delete('/deletepost', function (req, res) {
    res.send('DELETE Request Received at /deletepost');
});
app.put('/post', function (req, res) {
  res.send('PUT Request Received at /post')
})
app.listen(3000);