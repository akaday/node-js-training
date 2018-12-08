

const express = require('express');
const app     = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Render index.html
app.get('/', function(req, res) {
    // if just like this, it will not work
    // res.sendFile('./index.html');   

    // so we put path
    res.sendFile(path.join(__dirname+'/index.html'));
});

// Render user.html
app.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'));
});

// Render user and get path variable
app.get('/user/:name', function(req, res) {
    res.sendFile(path.join(__dirname+'/user.html'),  req.params);
});

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);    
});
