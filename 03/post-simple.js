
const express = require('express');
const engines = require('consolidate');

const hostname = '127.0.0.1';
const port = 3000;

/**************************************
 *          setup middle-ware         *
 **************************************/
const app     = express();
app.engine('html', engines.handlebars); //template engine
app.set('views', './view'); // folder location
app.set('view engine', 'html'); 


/*******************
 *    using get    *    
 *******************/ 
app.get('', (req, res)=>{
    res.render('form');
});

/****************
 *  using post  *
 ****************/ 
app.post('/', (req, res)=>{
    let body = '';
    req.on('data', data=> {
        body += data;
        console.log("Partial body: " + body);
    });
    req.on('end', ()=> {
        console.log("Body: " + body);
        // body will be string.
        res.send(body);
    });
});

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
