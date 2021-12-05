var http = require('http');
var fetch = require('node-fetch');


fetch('http://localhost:8081/sam.json', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(res => console.log(res));