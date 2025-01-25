const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    
  res.json("default page")
})
app.get('/product',(req,res)=>{
    res.json({"id":"2","name":"water bottel","price":"300"})
})
app.get('/product1',(req,res)=>{
    res.json({"id":"3","name":"shoes","price":"3000"})
})
app.get('/user',(req,res)=>{
    res.json({"id":"20","name":"xyz","address":"pqr"})
})
app.get('/user1',(req,res)=>{
    res.json({"id":"21","name":"stu","address":"lmn"})
})
app.get('/user2',(req,res)=>{
    res.json({"id":"22","name":"std","address":"tpq"})
})
app.get('/download',(req,res)=>{
    res.download("index.js")
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
