// http module creating a web server
var url = require('url');
var http = require('http');
var fs = require('fs');


//create a server
http.createServer(function (request, response) {

    //parse the request containing the filename
    var pathname = url.parse(request.url).pathname;


    //print the name of the file for which request is made
    console.log("Request for" + pathname + "Received.");

    if (request.method == "GET") {
        //Read the requested file content from filesystem
         fs.readFile(pathname.substr(1), function (err, data) {
             if (err) {
                 console.log(err);
                 //HTTP Status 404 not found
                 response.writeHead(404, { 'Content-Type': 'application/json' });
             }
             else {
                 //page found and status of 200 has to be returned
                 response.writeHead(200, { 'Content-Type': 'application/json' });

                 //write the content of the file to response body
                 response.write(data.toString());
             }
             //send the responseBody
             response.end();
         });
    }
    else {

     
         fs.writeFile(pathname.substr(1), body, (err, res) => {
             response.writeHead(200, { 'Content-Type': 'application/json' });
             response.end();
         });
    
    }
}).listen(8081);
console.log('server running at the link http://localhost/8081');

