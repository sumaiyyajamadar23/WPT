const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const route=require("./router/routers");

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use("/",route)

app.listen(3005,function()
{
    console.log("Route sucessfully");
})
module.exports=app;