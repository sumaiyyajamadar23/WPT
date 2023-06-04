const http=require("http")
const fs=require("fs")
const url=require("url")
const m=require("./authenticationmodel11")

const server=http.createServer(function(req,res)
{
    var s=url.parse(req.url,true)
    console.log(s)
    res.writeHeader(200,{"content-type":"text/html"})
    switch(s.pathname)
    {
        case "/login":
            var rs=fs.createReadStream("./public/login11.html")
            rs.pipe(res)
            break;
        case "/register":
            var rs=fs.createReadStream("./public/registration11.html")
            rs.pipe(res)
            break;
        case "/Validateuser":
            var uname=s.query.uname
            var passwd=s.query.passwd
            var ans=m.validation(uname,passwd)
            if (ans)
            {
                res.write("<h3>Successful login</h3>")
                res.write("<a href='/login'>login</a>/ <a href='/register'>registre me</a>");
                res.end()
            }
            else
            {
                res.write("<h3>UnSuccessful login</h3>")
                res.write("<a href='/login'>login</a>/ <a href='/register'>registre me</a>");
                res.end()
            }
            break;
            case "/registeruser":
                var uname=s.query.uname;
                var passwd=s.query.passwd;
                var ans=m.adduser(uname,passwd)
                if(ans)
                {
                    res.write("<h3>Successful registration</h3>");
                    res.write("<a href='/login'>login</a>/ <a href='/register'>registre me</a>");
                    res.end()
                }
                else
                {
                        res.write("<h3>unsuccessful registration</h3>");
                        res.write("<a href='/login'>login</a>/ <a href='/register'>registre me</a>");
                        res.end()
                }
                    break;
        default:
            res.write("<h3>Pls login or register</h3>");
            res.write("<a href='/login'>login</a>/ <a href='/register'>registre me</a>");
            res.end()
    }
})
server.listen(1234,console.log("zinda hu m 1234 pe"))