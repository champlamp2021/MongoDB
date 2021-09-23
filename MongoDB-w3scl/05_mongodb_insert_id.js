var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  //Insert 3 documents, with specified id values:
  var input_data = [
    { _id: 10001, userid: "CE58222110450-7",firstname:"Nanthana",lastname:"soidok"},
    { _id: 10002, userid: "CE58222110450-8",firstname:"Sawitree",lastname:"Manadee"},
    { _id: 10003, userid: "CE58222110450-9",firstname:"Nawin",lastname:"Krub"}
  ];
  dbo.collection("user2").insertMany(input_data, function(err, res) {
    if (err) throw err;
    //Return the result object:
    console.log(res);
    db.close();
  });
});
