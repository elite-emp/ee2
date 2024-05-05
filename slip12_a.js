var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",  // by default root
  password: "",    // by default root has no Password
  database: "customers"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  //create database
   con.query("CREATE DATABASE customers", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
    
  //create table
   var sql = "CREATE TABLE customer(Cname VARCHAR(255), mno INTEGER, addr VARCHAR(255))";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table created");
   });

   //insert record
   var sql = "INSERT INTO customer VALUES ('Akash', 7249184378, 'Dighi')";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
   });

   //select All record 
   con.query("SELECT * FROM customer", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
   });
   con.end();
});
