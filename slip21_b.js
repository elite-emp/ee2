const fs=require('fs');
var http=require('http');
var express=require('express');
var path=require('path');
var formidable=require('formidable');
var bodyparser=require('body-parser');
var app=express();
var newpath;
var server=http.createServer(app);
app.use( bodyparser.urlencoded( {extended:false} ) );
app.use(express.static(path.join(__dirname,'./public')))//html files saved in public directory
app.get('/',function(req,res)
{
 res.sendFile(path.join(__dirname,'./public/uploadFile.html'));
})
app.post('/uploadFile',function(req,res)//js file name
{
var form=new formidable.IncomingForm();
form.parse(req,function(err,fields,files)
{
 var oldpath=files.filetoupload[0].filepath;
 
newpath='C:\Users\Administrator\Desktop\FG216'+files.filetoupload[0].originalFilename;//y
our folder path
 fs.rename(oldpath,newpath,function(err)
 {
 if (err) throw err;
 else
 {
 res.sendFile(path.join(__dirname,'./public/downloadFile.html')); 
 }
 });
});
});
app.post('/downloadFile',function(req,res)
{
 res.download(newpath,function(err)
 {
 res.end("Done with download...");
 });
});
server.listen(3030,function(){
 console.log("Server listening...");
})
