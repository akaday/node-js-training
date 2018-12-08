

const express = require('express');
const engines = require('consolidate');

const hostname = '127.0.0.1';
const port = 3000;

//setup
const app     = express();
app.engine('html', engines.handlebars); //template engine
app.set('views', './view'); // folder location
app.set('view engine', 'html'); // 

// Render index.html
app.get('/', function(req, res) {
    // set index w/o extention and path
    // because we setup engine before
    res.render('index');
});

// Render user.html
app.get('/user', function(req, res) {
    // so we put path
    res.render('user');
});

// Render user and get path constiable
app.get('/user/:name', function(req, res) {
    //send with params
    res.render('user', req.params);
});

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);    
});
