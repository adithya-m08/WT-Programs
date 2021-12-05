const perimeter = function(a,b){
return 2*(a+b);
}
const showPerimeter = function(){
console.log(perimeter(2,2));
}
const start = function(){
console.log('Initailizing.....');
console.log('Getting Started.....');
setTimeout(showPerimeter,10000);
console.log('Ending program.....');
console.log('Exiting.....');
}
start();