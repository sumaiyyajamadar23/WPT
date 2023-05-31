// 
const fs=require("fs")
//fs.writeFileSync("text1.txt","my name is sumaiyya")
data=fs.readFileSync("text1.txt")
console.log(data.toString())