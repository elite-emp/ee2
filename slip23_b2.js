2)date.js
var http=require('http');
var req=require('./date_module.js');
d=req();
http.createServer(function(request,respose)
{
 respose.writeHead(200,{'content-type':'text/html'});
 respose.write(d.toString());
 respose.end();
}).listen(3030);
Output:
//Sun Apr 07 2024 16:18:25 GMT+0530 (India Standard 
Time)...Shows on browse