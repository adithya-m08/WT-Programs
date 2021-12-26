function welcome () {  
    console.log("Welcome Class!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
   clearTimeout(id1); 

//   Its recursive in nature.
//    It will terminate after one step if you use ClearInterval.

// clearImmediate(immediateObject): 
//   It is used to stop an immediateObject, as created by setImmediate
// clearInterval(intervalObject): 
//     It is used to stop an intervalObject, as created by setInterval
// clearTimeout(timeoutObject): 
//     It prevents a timeoutObject, as created by setTimeout