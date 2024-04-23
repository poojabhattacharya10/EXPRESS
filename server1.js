// console.log('start');
const express = require('express')
const app = express()
// console.log(app);
// get delete post put(update)
app.get('/cal/si',(req,res)=>{
    // let name = req.query.name
    // console.log(name , 'name');
    let si = (req.query.p * req.query.r * req.query.t)/100
    console.log(si , 'si');
    res.end('<h1> hello SI is ... </h1>' + si)
})
app.listen(3000,(err)=>{
        console.log(err);
})


// /cal/si?




















