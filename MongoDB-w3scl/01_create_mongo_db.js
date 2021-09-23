var mongo = require('mongodb');
//Create a database called 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";  //เชื่อมต่อข้อมูลไปยังฐานข้อมูล -> admin

MongoClient.connect(url, function(err, db) {
    //เช็คข้อมูลหากไม่สามารถเชื่อมต่อกับฐานข้อมูลได้
  if (err){
      throw err;
  } 
  //ฐานข้อมูลมีการเชื่อมต่อ
  if(db){
      console.log("Database created!...");
        }
    //ปิดฐานข้อมูล
  db.close();
});

