
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

/**************************************
 *          setup middle-ware         *
 **************************************/
const app     = express();
app.engine('html', engines.handlebars); //template engine
app.set('views', './view'); // folder location
app.set('view engine', 'html'); 

/**  use for /ex2 **/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
// read more body-parser in : https://www.npmjs.com/package/body-parser
/**  end use for /ex2 **/

/*******************
 *    using get    *    
 *******************/ 
app.get('', (req, res)=>{
    res.render('form');
});

/******************************************
 *  using post. ex 1. using middleware    *
 ******************************************/ 
app.post('/ex2', (req, res)=>{
    let body = req.body;
    res.send(body);
});


/*******************************************************
 *  using post. ex 2. recomended setting bodyParser    *
 *******************************************************/ 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, (req, res)=>{
    let body = req.body;
    res.send(body);
});

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, (req, res)=>{
    let body = req.body;
    res.send(body);
});

/*******************************************************
 *  using post. ex 3. direct get from form.            *
 *  request from app.get('')
 *******************************************************/
// create application/x-www-form-urlencoded parser

// POST /login gets urlencoded bodies
app.post('', urlencodedParser, (req, res)=>{
    let body = req.body;
    res.render('form', body);
});

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

/** 
 * https://codeforgeek.com/2014/06/express-nodejs-tutorial/
 * https://flaviocopes.com/node-request-data/
 * https://www.npmjs.com/package/body-parser
*/