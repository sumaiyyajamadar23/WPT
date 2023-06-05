const mysql=require("mysql")
 const mysqlconnect=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"Pass@",
    "port":3306,
    "database":"sumaiyya"
 })
 mysqlconnect.connect((err)=>
 {
    if(err)
    {
        console.log("Error occured",JSON.stringify(err))
    }
    else
    {
        console.log("Connection done")
    }
 })
 module.exports=mysqlconnect;