var express = require("express");
var app=express();

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})
server=app.listen(3000)
const io=require("socket.io")(server)

io.on('connection',(socket)=>{
    console.log("New user connected");

    //default username
    socket.username="anonymous";

    //listen new message
    socket.on('change_username',(data)=>{
socket.username=data.username
    })
    
    //listen on new message
    socket.on('new_message',(data)=>{
        io.sockets.emit('new_message',{message : data.message , username : socket.username});
    })
})

 