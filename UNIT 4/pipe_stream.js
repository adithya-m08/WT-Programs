var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var writableStream = fs.createWriteStream('file1.txt');

readableStream.pipe(writableStream);