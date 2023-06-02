userdata={"user1":"user1","user2":"sam","sumaiyya":"sumaiyya"}

exports.validation=(username,password)=>
{
 var v=userdata[username]
 return v===password
}

exports.adduser=(username,password)=>
{
    var v=userdata[username]
    if(p!==undefined)
    {
        return false;
    }
    else
    {
     userdata[username]==password
     console.log(userdata)
     return true;
    }
}