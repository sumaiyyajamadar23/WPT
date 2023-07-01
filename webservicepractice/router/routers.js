const express=require("express")
const router=express.Router
const connection=require("../db/dbconnect")

router.post("/employee/employee/:empid",(req,res)=>
{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;

    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],
    (err,result)=>
    {
        console.log(result)
        if(err)
        {
            res.status(500).send("data not inserted")
        }
        else
        {
        if(result.affectedRows>0)
        {
            res.send("{'msg':'inserted successfully'}")
        }
        else
        {
           res.send({'msg':'not inserted'})
        }
        }
    }
   
    )
})
module.exports=router;