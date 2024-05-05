/*Q1)Create a Node.js file that writes an HTML form, with an upload field.*/
var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require("path");
var formidable = require('formidable');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './slip5_1.html')); // Adjust path to match the location of slip5_1.html
});

app.post('/fileupload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.fileupload[0].filepath;
        console.log("\n oldpath" + oldpath);
        var newpath = path.join(__dirname, 'public', files.fileupload[0].originalFilename);
        console.log("\n newpath" + newpath);
        fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});

server.listen(7000, function() {
    console.log("Server listening on port: 7000");
});
