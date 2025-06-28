const express=require ('express')
const app=express()
app.get('/',function(req,res){
    res.send("hello world")
})
app.get('/dharsh',function(req,res){
    const id=req.query.id
    res.send("hello dharshana"+id)
})
app.get('/dharsh/:id',function(req,res){
    const id=req.params.id
    res.send("heyy barath"+id)
})
app.listen(9000,function(req,res){
    console.log("running......")
})
