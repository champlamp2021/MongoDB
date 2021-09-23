var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var input_data = [
      {userid: "CE58222110450-3", firstname:"Tanyarat", lastname: "Namyong",}, 
      {userid: "CE58222110450-4", firstname:"Saksit", lastname:"Manadee"},
      {userid: "CE58222110450-5", firstname:"Suradit",lastname:"Pho-ngern"},
      {userid: "CE58222110450-6", firstname:"Issarapap", lastname:"Wichai"}
  ];
  dbo.collection("user2").insertMany(input_data, function(err, res) {
    if (err) throw err;
    if(res){
        console.log("Number of documents inserted: " + res.insertedCount);
    }
    db.close();
  });
});