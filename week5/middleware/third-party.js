var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send(req.cookies);
});

app.listen(4000);