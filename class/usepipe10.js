const fs=require("fs")
var rs=fs.createReadStream("text.txt")
var ws=fs.createWriteStream("text1.txt")
rs.pipe(ws);