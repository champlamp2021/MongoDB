//function 
const {FindData} = require('./12_mongodb_query_s');  //เรียกใช้ function จาก file ./12_mongodb_query_s
const {queryData} =require("./11_mongodb_query");
const {findMessage}= require("./07_mongodb_find");

findMessage();
 //FindData("Saksit","admin","user2")  //เรียกใช้  function  FindData();
 /**
  * "Saksit"->คือข้อมูลที่ต้องการค้นหาจากฐานข้อมูลชื่อ admin ที่ collection user2
  */
 //queryData("admin","user2","CE58222110450-6"); //เรียกใช้ function  queryData();
 /** ฐานข้อมูล database => admin
  * ที่ตาราง/Collection => user2
  * ข้อมูลที่ต้องการค้นหา =>  
  */


