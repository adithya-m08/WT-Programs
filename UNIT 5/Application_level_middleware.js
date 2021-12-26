//Application-level middleware
var express = require('express')
var app = express()

app.get('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })
app.listen(3000);