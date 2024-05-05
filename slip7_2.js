/*Create a node js file named main.js for event-driven application. There should be a main loop
that listens for events, and then triggers a callback function when one of those events is
detected. */

var events=require('events')
var em=new events.EventEmitter();
function add(a,b)
{
 console.log("Addition: "+(a+b));
}
function sub(a,b)
{
 console.log("subtraction: "+(a-b));
}
function mul(a,b)
{
 console.log("Multiplication: "+(a*b));
}
function div(a,b)
{
 console.log("Division: "+(a/b));
}
em.on('arithmetic',add);
em.on('arithmetic',mul);
em.on('arithmetic',sub);
em.on('arithmetic',div);
em.emit('arithmetic',12,2);