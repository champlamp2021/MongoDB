var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //Exclude "address" field in the result:
  var dbo=db.db("admin");
  dbo.collection("user2").find({}, { projection: { userid: 1, firstname: 1 } }).toArray(function(err, result) {
    if (err) {throw err;}
    if(result){
        console.log(result);
        console.log(result[2].firstname);
    }
    db.close();
  });
});
