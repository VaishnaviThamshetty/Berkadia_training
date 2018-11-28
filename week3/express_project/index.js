const express = require('express');
    const app = express();
    app.listen(3000, function() {
        console.log('listening on 3000');
      });
      app.get('/', function(req, res) {
        res.send("Yep it's working");
      });

//This is reading data from a given file
app.get('/get', (req, res) => {
     res.sendFile(__dirname + '/t1.txt')});

//Here we are changing the data in the given file 
var fs = require('fs');
var readme  = fs.readFileSync('t2.txt','utf8');
fs.writeFileSync('t1.txt',readme);
    app.post('/post', (req, res) => {
        res.sendFile(__dirname + '/t1.txt')});
