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
/*Addition: 14
Multiplication: 24
subtraction: 10
Division: 6*/
