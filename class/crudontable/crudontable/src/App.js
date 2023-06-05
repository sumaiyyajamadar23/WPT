//import
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const rout=require("./rout/rout")
//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
//add url handler
app.use("/",rout)
//start server
app.listen(2190,console.log("Bas zinda ho gaya hu 2190 p"))
module.exports= App;
