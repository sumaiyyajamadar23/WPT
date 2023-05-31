var buf1=Buffer.alloc(500)
console.log(buf1.write("Sumaiyya"));
console.log(buf1.toString());
var buf2=new Buffer("s")
console.log(new Buffer(buf2));
console.log(buf2.toString());
target=Buffer.alloc(buf2.length)
buf2.copy(target);
console.log(target.toString())