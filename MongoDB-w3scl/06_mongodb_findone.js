//select data from a table in MongoDB, we can also use the find() method.
//Find the first document in the customers collection:
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.collection("user2").findOne({}, function(err, result) {
    if (err) {throw err;}
    if(result){
        console.log(result.lastname);  //เลือกข้อมูลในฐานข้อมูลที่ต้องการ
      /*  console.log(result);
        console.log(result._id);
        console.log(result.userid);
        console.log(result.firstname);*/
    }
       db.close();
  });
});