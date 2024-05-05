/* Q1)Create a Node.js file that demonstrate create college database and table in MySQL */
var mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
console.log("Connection Successful!");
var CollegeSchema=mongoose.Schema({
    name:String,
    Address:String,
    Establish:Number,
    Course:[String]
    });
    var clg = mongoose.model('College', CollegeSchema,'collegeInfo');
    var college = [{ name: 'MIT ACSC',Address:'Alandi',Establish:2000,Course:['Computer Science','Computer Application']}];

clg.collection.insertMany(college, function (err, docs) {
if(err){
return console.error(err);
}else{
console.log(college);
}
let query= clg.find();
query.select({name:1,Address:1,Establish:1,_id:0})
const doc=query.exec();
doc.then(function(res){
    console.log(res);
});
}) 
});