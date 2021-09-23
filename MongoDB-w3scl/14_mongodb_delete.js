var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  /*Delete the first user with the fisrtname "Tanyarat":*/
  var myquery = { firstname: "Tanyarat"};
  dbo.collection("user").deleteOne(myquery, function(err, obj) {
    if (err){throw err;} 
    console.log("1 document deleted");
    db.close();
  });
});