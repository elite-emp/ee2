var http = require("http")
http.createServer(async function(req,res){
    var msg = 'HELLO WORLD!';
    res.write(msg.toLowerCase())
    res.end()
}).listen(3001)
console.log("running on localhost:3001 ...")

// ..OR console.log("HELLO WORLD!".toLowerCase());

