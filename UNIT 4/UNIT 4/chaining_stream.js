var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('output.txt'));