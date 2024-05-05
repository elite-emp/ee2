//15a  create students DB, Table and insert some record in it.
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",  // by default root
  password: "",    // by default root has no Password
  //database: "students"
});
con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");

    //create database
       con.query("CREATE DATABASE students", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
        
      //create table
       var sql = "CREATE TABLE stud(rno INTEGER, name VARCHAR(255), mno INTEGER, addr VARCHAR(255))";
       con.query(sql, function (err, result) {
         if (err) throw err;
         console.log("Table created");
       });
    
       //insert record
       var sql = "INSERT INTO stud VALUES (3,'aditi', 9579740156 , 'Sant Nagar')";
       con.query(sql, function (err, result) {
         if (err) throw err;
         console.log("1 record inserted");
       });
    

       //select All record 
       con.query("SELECT * FROM stud", function (err, result, fields) {
         if (err) throw err;
         console.log(result);
       });
   con.end();
});

//1st comment database:students and then run code after that remove comment of it and comment create Database section
