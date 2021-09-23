var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var myquery = { userid: "CE58222110450-2" }; //query data 
  var newvalues = { $set: {firstname: "Natthaphong", lastname: "Thammabut" } };//data update new
  dbo.collection("user2").updateOne(myquery, newvalues, function(err, res) {
    if (err){throw err;} 
    if(res){
        console.log("1 document updated");
    }
    db.close();
  });
});