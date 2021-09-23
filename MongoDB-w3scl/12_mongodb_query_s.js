

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const FindData = async (obj,database,table) =>{  //create function เพื่อรับข้อมูล
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);  //
    /*Return only the documents where the address starts with an "S":*/
    var query = { firstname: obj };  //ระบุข้อมูลที่ต้องการค้นหา 
    dbo.collection(table).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}


module.exports = {FindData} //sending to find