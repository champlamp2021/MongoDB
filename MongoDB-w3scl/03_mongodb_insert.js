//Insert a document in the "customers" collection:
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
//insert data
    var data2 = { userid: "CE58222110450-2", firstname:"Natthaphong",lastname:"Thammabut" };
    dbo.collection("user2").insertOne(data2, function(err, res) {
      if (err) {throw err;}
      if(res){
        console.log("1 document inserted");
      } 
      db.close();
    });
  });