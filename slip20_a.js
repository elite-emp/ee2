var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",  // by default root
  password: "",    // by default root has no Password
  database: "students"  //
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
       var sql = "INSERT INTO stud VALUES (4,'ASA', 9579740156 , 'Dighi')";
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

