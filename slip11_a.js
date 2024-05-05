var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",  // by default root
  password: "",    // by default root has no Password
  database: "Movie"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

   //create database
   con.query("CREATE DATABASE Movie", function (err, result) {
      if (err) throw err;
      console.log("Database created");
  });

   //create table
   var sql = "CREATE TABLE Movie (Mname VARCHAR(255), No_ofActors INTEGER)";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Table created");
   });

   //insert record
   var sql = "INSERT INTO Movie (Mname, No_ofActors) VALUES ('ASA', 24)";
   con.query(sql, function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
   });

   //select record
   con.query("SELECT * FROM Movie", function (err, result, fields) {
     if (err) throw err;
     console.log(result);
   });
   con.end();
});
