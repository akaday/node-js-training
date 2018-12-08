

const express = require('express');
const app     = express();

const hostname = '127.0.0.1';
const port = 3000;

// simple
app.get('/', function(req, res) {
    res.send('Hello Word');
});

// Get path
app.get('/user', function(req, res) {
    res.send(`<h1>List User</h1>`);
});

// Get path variable
app.get('/user/:name/', function(req, res) {
    res.send(`<h1>Spesifik User: ${req.params.name}</h1>`);
});

// Multi direct
app.get(['/user/:name/', '/member/:name/', '/teman/:name/'], function(req, res) {
    res.send("<h1>Multi</h1> Selected "+req.params.name);
});

// Multiple Route parameters
// this still not work
app.get('/user/:name/:add', function(req, res) {
    res.send(req.params);
});

// this will work
// localhost:3000/user/cakra/add/medan
app.get('/user/:name/add/:add', function(req, res) {
    res.send(req.params);
});

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);    
});
