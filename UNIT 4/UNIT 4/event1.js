var emitter = require('events').EventEmitter;
function iterateProcessor(num) {
  var emt = new emitter();
  setTimeout(function () {
        for (var i = 1; i <= num; i++) {
          emt.emit('BeforeProcess', i);
          console.log('Processing Iteration:' + i);
          emt.emit('AfterProcess', i);
        }
      }
      , 5000)
  return emt;
}
var it = iterateProcessor(5);
 
it.on('BeforeProcess', function (info) {
  console.log('Starting the process for ' + info);
});
 
it.on('AfterProcess', function (info) {
  console.log('Finishing processing for ' + info);
});