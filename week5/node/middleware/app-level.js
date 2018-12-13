const express = require('express');
const app = express();
let middleware=(req,res,next)=>
{
    query=req.query;
    var u = query.user;
    var p = query.pass;   
    if(u=="vaishu" && p == "vaishu12") 
    {
        next();
    }
    else{
        res.error();
    }
}
app.get("/",middleware,(req,res,next)=>{
    res.send("Hi");
});

app.listen(3000)

