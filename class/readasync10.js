const fs=require("fs");
fs.readFile("text.txt",function(err,data)
{
    if(err)
    {
        console.log("Error occured",err)
    }
    else
    {
      console.log(data.toString())
    }
})
console.log("before readfilesync")
var d1=fs.readFileSync("text1.txt")
console.log(d1.toString());
console.log("after readfilesync")
console.log("first exicute synch and after that asynch")
//first exicute synch and after that async