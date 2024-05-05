/*Q.2) Write node js script to build Your Own Node.js Module. Use require (‘http’) module is a built-
in Node module that invokes the functionality of the HTTP library to create a local server. Also
use the export statement to make functions in your module available externally. Create a new
text file to contain the functions in your module called, “modules.js” and add this function to
return today’s date and time.*/

var d = require("./display_date")
var http = require("http")

http.createServer(function(req,res){
    res.write(d().toString())
    res.end()
}).listen(3004)
console.log("running...")