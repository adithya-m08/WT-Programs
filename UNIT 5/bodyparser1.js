var express = require('express')
const bodyParser = require('body-parser');
var app = express()

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());

app.listen(2300);