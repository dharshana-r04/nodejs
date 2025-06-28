var fs=require('fs')
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})
fs.writeFile('calc1.js','console.log("hello world")',function(err,data){
    console.log("data saved")
})
fs.unlink('calc1.js',function(err){
    console.log("data deleted")
})
