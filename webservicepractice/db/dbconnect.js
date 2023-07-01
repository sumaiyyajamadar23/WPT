var mysql=require("mysql");

const mysqlconnection=mysql.createConnection
({
"host":"127.0.0.1",
"user":"root",
"password":"Pass@",
"database":"test",
"port":3306
})
mysqlconnection.connect((error)=>
{
    if(error)
    {
        console.log("Error occured"+JSON.stringify(error));
    }
    else
    {
        console.log("Connected successfullly");
    }
})
module.exports=mysqlconnection;