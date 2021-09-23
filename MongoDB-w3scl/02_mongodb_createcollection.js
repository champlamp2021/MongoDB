//Create a collection called "user":
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin"); //นำฐานข้อมูล admin เข้าไปไว้ที่ var dbo
  dbo.createCollection("user2", function(err, res) {
    if (err){
        throw err;
    } 
    if(res){
        console.log("--สร้าง Collection หรือตารางเรียบร้อยแล้วค่ะ")
        console.log("------Collection created!...");
    }
    db.close();
  });
});