var http=require('http');
var fs=require('fs');
var data=fs.readFileSync('data.html');
http.createServer(function(req,res)
{ 
 res.writeHead(200,{ 'content-type': 'text/html' } );
 res.write(data);
 res.end();
}).listen(3030)
console.log("end");
