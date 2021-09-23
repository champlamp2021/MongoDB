var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var myquery = { firstname: /^-/ }; //ค้นหาคำขึ้นต้น
  var newvalues = {$set: {firstname: "test"} };
  dbo.collection("user2").updateMany(myquery, newvalues, function(err, res) {
    if (err){throw err;}
    if(res){
   // console.log(res.result.nModified + " document(s) updated");
   console.log("update");
    }
    db.close();
  });
});