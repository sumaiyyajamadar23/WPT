const http=require("http")
const url=require("url")
function process(req,res)
{
  var v=url.parse(req.url,true)
  console.log(v)
  res.writeHeader(200,{"content-type":"text/html"})
   
  switch(v.pathname)
  {
    case "/home":
        res.write("<h2>Home page p hu</h2>")
        res.end("<h4>bas nikal raha hu home page se</h4>")
        break;
    case "/aboutus":
        res.write("<h2>about us page p hu</h2>")
        res.end("<h4>aa raha hu vapas aboutus se</h4>")
        break;
     default:
          res.write("<h1>gum gaya m to</h1>");
         res.end();
            break   ; 
  }
}
var server=http.createServer(process)
server.listen(219,console.log("219:m zinda ho gaya hu"))