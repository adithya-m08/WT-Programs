var http = require('http');

http.createServer(function (req, res) {

// response header to display content as html    

res.writeHead(200, {'Content-Type':'text/html'})    

// Write response to client

res.write('<b>Hi Guest</b><br/>');

res.write('<span style="font-weight:bold; color:Green">Welcome to Class</span>');

res.end();

}).listen(4200, console.info("Server listening on port 4200"));