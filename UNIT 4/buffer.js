// var buf = Buffer.alloc(15);
// const buf1 = Buffer.allocUnsafe(10);
// const buf1 = Buffer.allocUnsafe(10, 3);
// console.log(buf1);

// const buf1 = Buffer.allocUnsafe(100);
// const len = buf1.write('welcomeuser',2,5,'utf8');
// console.log(len);

// const buf = Buffer.from('welcome to  node.js class');
// var len = buf.length
// console.log(len)

// array-to-buffer.js

// var arr = [true, true, false];
// const buf = Buffer.from(arr);
 
// for(const byt of buf.values()){
//     console.log(byt);
// }

// // convert-json-to-buffer.js

// const msg = '{"name":"John", "age":"22"}';
// var jsonObj = JSON.parse(msg);
 
// // convert JSON object to String
// var jsonStr = JSON.stringify(jsonObj);
 
// // read json string to Buffer
// const buf = Buffer.from(jsonStr);
 
// console.log(buf.length);

buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5));