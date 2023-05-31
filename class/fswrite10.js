const fs=require("fs")
fs.writeFile("sam.txt","this is async demo in write",function(err)
{
    if(err)
    {
        console.log("Error occured",err)
    }
    else
    {
    fs.readFile("sam.txt",function(errr,data2)
    {
        if(errr)
        {
            console.log("Error occured ",errr)
        }
        else
        {
    console.log(data2.toString())
        }
    })
    }
})
fs.writeFileSync("sam.txt","This is fs write demo of sync")
data=fs.readFileSync("sam.txt")
console.log(data.toString())