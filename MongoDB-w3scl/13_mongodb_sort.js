//Sort the result alphabetically by userid: 
// 1  เรียงข้อมูล userid จากน้อยไปหามาก
//-1  เรียงข้อมูล userid จากมากไปหาน้อย
//ตัวอย่างเป็นการเรียงข้อมูล  userid  จาก  มากไปหาน้อย


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("admin");
        //Sort the result by name:
        var sort = { userid: 1 };
        dbo.collection("user2").find().sort(sort).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    
