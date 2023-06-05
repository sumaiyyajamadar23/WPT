const express=require("express")
const r=express.Router()
const dbconnect=require("../dbconnection/db")

r.get("/employyees",(req,res)=>
{
    dbconnect.query("Select * from employee",(err,data)=>
    {
        if(err)
        {
            res.status(500).send("data not found"+JSON.stringify(err))
        }
        else
        {
            res.send(data)
        }
        })
})
module.exports=r;