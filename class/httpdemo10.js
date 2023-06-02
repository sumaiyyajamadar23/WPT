const http=require("http")

var server=http.createServer(function(req,res)
{
    console.log("method:",req.method,"url: ",req.url)//loads req method and url url of incoming request of server
   res.writeHeader(200,{"conent-type":"text/html"})
   res.write("<h1>jagooooooo port 2190</h1>")
   res.end("<h3>subh bo gaiiiiii</h3>")
})
server.listen(2190,console.log("ha jag gaya port 2190"))
