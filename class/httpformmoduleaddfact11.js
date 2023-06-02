const http=require("http")
const fs=require("fs")
const url=require("url")
const m=require("./formforaddfact11")

const server=http.createServer(function(req,resp)
{
      var s=url.parse(req.url,true)
      resp.writeHeader(200,{"content-type":"text/html"})
      switch(s.pathname)
      {
            case "/form":
                  var rs=fs.createReadStream("./public/formforaddfact11.html")
                  rs.pipe(resp)
                  break;
            case "/submit-data":
                  if(s.query.btn==="add")
                  {
                        var num1=parseInt(s.query.num1)
                        var num2=parseInt(s.query.num2)
                        var ans=m.addition(num1,num2)
                        resp.write("<h3>Addition : "+ans+"</h3>");

                  }
                else
                 {
                  var num1=parseInt(s.query.num1);
                  var ans=m.factorial(num1)
                  resp.write("<h3>Factorial : "+ans+"</h3>");
                 }
                  resp.end();
                  break;
            default:
                  resp.write("some other page");
                  resp.end("use /form url")
      }
})
server.listen(3003,function(){
      console.log("server is running at port 3003")
  })