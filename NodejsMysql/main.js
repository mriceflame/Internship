var mysql = require('mysql');
const express = require('express');
const app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_db"
});
app.use(express.json());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.post('/abc', ( req,res, next) => {

  //var insert_query = "INSERT INTO students (ID,Name,RollNumber,Department) VALUES ('','Name',037,'IT')";
 // con.query(insert_query, function (err, result) {
 //     if (err) throw err;
 //     console.log("1 record inserted");
 //   });
  // con.query("SELECT * FROM students", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   res.send(result);
  // });

//   for(var i=0;i<req.body.length;i++) 
//   {
//     //console.log(req.body[i]);
//     var insert_query = "INSERT INTO students (ID,Name,RollNumber,Department) VALUES ('','"
//     +req.body[i].name+"','"+req.body[i].rollNumber+"','"+req.body[i].Department+"')";
//     con.query(insert_query, function (err, result) {
//       if (err) throw err;
//     });
// console.log(insert_query);
//   }

//     res.end("aaa");

//   });

app.post('/abc', ( req,res, next) => {
var Data;
var Getdata_query = "SELECT * FROM students";


con.query(Getdata_query, function (err, Data) {
  if (err) throw err;
  console.log(Data);
  res.send(Data);
});

//res.end("aaa");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

