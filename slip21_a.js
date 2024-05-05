var mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function()
{
console.log("Connection Successful!");
var movieSchema =mongoose.Schema(
 {
 title: String,
 director: String,
 year: Number,
 genre: [String]
});
var Movie = mongoose.model('Movie', movieSchema,'moviestore');
var newMovie = [{title: "Inception",director: "Christopher Nolan",year: 2010,genre: ["Sci-Fi", 
"Action", "Thriller"]},
{title: "Rocketry",director: "ABC",year: 2023,genre: ["Sci-Fi", "Real incident"]}];
Movie.collection.insertMany(newMovie,function(err,docs)
{
 if(err)
 {
 return console.error(err);
 }
 else
 {
 console.log(newMovie);
 } 
});
});
/*Output
Connection Successful!
[
 {
 title: 'Inception',
 director: 'Christopher Nolan',
 year: 2010,
 genre: [ 'Sci-Fi', 'Action', 'Thriller' ],
 _id: new ObjectId('6612a23f200ff604061976a2')
 },
 {
 title: 'Rocketry',
 director: 'ABC',
 year: 2023,
 genre: [ 'Sci-Fi', 'Real incident' ],
 _id: new ObjectId('6612a23f200ff604061976a3')
 }
]
*/
