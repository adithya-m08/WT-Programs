const http = require('http');

const options = {
    hostname: 'localhost',
    port: 8081,
    path: '/admin',
    method: 'GET'
};
var callback= function(response){
	var body="";
	response.on('data', function(data){
		body+=data;
	});

 //binds an event with its event handler
 response.on('end', function(){
 	console.log(body);
 });
 response.on('error', (err) => {

    console.error(err);
});


};
const req = http.request(options, callback);

req.end();