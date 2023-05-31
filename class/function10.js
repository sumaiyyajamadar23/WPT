 exports.addition=function(n1,n2)
 {
    return "Addition of"+n1+"+"+n2+"is: "+(n1+n2)
 }
 exports.factorial=function(num)
 { 
    fact=1
    for(var i=1;i<=num;i++)
    {
        fact=fact*i
    }
    return "Factorial of"+num+"is: "+fact
 }