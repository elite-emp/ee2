/*Q2)Using node js create a web page to read two file names from user and append contents of first
file into second file. */

var express=require('express');
var http=require('http')
var fs=require('fs')
var path=require('path')
var bodyParser=require('body-parser')
var app=express();
var server=http.createServer(app);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'./public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./public/slip2_2.html'));
});

app.post('/append',function(req,res){
    var f1=req.body.f1;
    var f2=req.body.f2;
    //console.log(f2)
    var data=fs.readFileSync(f1);
    fs.appendFile(f2,data,(err)=>{
         if(err)console.log(err)
    });
    res.writeHead(200,{'content-type':'text/html'})
    res.write(fs.readFileSync(f2))
    res.end()
})
server.listen(3999,function(){
    console.log("Server listening on port:3999")
})