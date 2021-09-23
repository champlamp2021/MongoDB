//Find documents with the userid "CE58222110450-6":
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const queryData= async (database,table,findData) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var query = { userid: findData };
        dbo.collection(table).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

module.exports ={queryData}