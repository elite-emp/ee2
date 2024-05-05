var express = require('express')
var fs = require('fs')
var path = require('path')
var http = require('http')
var formidable = require('formidable') // npm i formidable
var bodyParser = require('body-parser')
var newPath;

var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'./public'))); //__dirname is current dir name and ./public is dir name of out html folder

app.get('/',function(req,res){ //here html file is opened for getting input
    res.sendFile(path.join(__dirname,'./public/fileUpload.html'));
});

//below match action and post 1st arg if those are same then below code get executed
app.post('/fileUpload',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){

        var oldPath = files.fUpload[0].filepath; //fUpload[0] is id of my input Tag and zero represents 1st file choosen from multiple files
        console.log("\n oldPath : "+oldPath) 

        newPath = 'C:/Users/Mehta/' +files.fUpload[0].originalFilename;
        console.log("\n newPath : "+newPath);

        fs.rename(oldPath,newPath,function(err){
            if(err) throw err;
            else{
                //res.write('file Uploaded and Moved! ');
                //res.end();
                res.sendFile(path.join(__dirname,'./public/fileDownload.html'));
            }
        });
    });
});

app.post('/fileDownload',function(req,res){ //downloading same file which we uploaded it access that file by index so....
    res.download(newPath,function(err){
        res.write("write Succesfully");
    })
})

server.listen(3000,function(){
    console.log("Running on port : 3000");
})
