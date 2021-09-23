
//Return the fields "firstname" and "lastname" of all documents in the customers collection:
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  //Exclude the _id field from the result:
  dbo.collection("user2").find({}, { projection: { _id: 0,  firstname: 1,lastname:1} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();

  });
});
