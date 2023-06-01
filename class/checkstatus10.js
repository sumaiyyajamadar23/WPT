const fs=require("fs")
fs.exists("sam.txt",function(flag)
{
    if(flag)
    {
        console.log("Exists")
        fs.stat("sam.txt",function(err,status)
        {
            if(err)
            {
                console.log("Error occured",err)
            }
            else
            {
                console.log(status.size)
                console.log(status.uid)
                console.log("mode",status.mode)
            }
        })
    }
    else
    {
        console.log(" not Exists")
    }
})