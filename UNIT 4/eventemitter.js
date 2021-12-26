var events=require("events");
var eventEmitter= new events.EventEmitter();
var  myEventHandler=function()
{
    console.log("i love Icecream");
}
 eventEmitter.on("cream",myEventHandler);
 eventEmitter.emit("cream");