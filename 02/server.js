//===== ROUTE.JS ======/
const route = require("./route");  // get from route.js
const http = require("http");   // available when install node

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(route.doRoute).listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);    
});
