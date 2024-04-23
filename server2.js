const express = require('express')
const app = express()
app.get('/cal/avg/marks' , (req,res)=>{
    let avg = (req.query.hi + req.query.eng + req.query.mt )/3
    res.end('<h1>Avg is : </h1>' + avg)
})
app.listen(3000,(err)=>{
    console.log(err);
})