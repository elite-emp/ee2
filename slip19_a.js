var http = require("http")
http.createServer(async function(req,res){
    var msg = 'hello world!';
    res.write(msg.toUpperCase())
    res.end()
}).listen(3001)
console.log("running on localhost:3001 ...")

// ..OR console.log("hello world!".toUpperCase());
