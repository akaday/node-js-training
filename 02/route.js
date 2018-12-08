//===== ROUTE.JS ======/

var fs = require('fs'); // available when install node
var url = require('url');   // available when install node

var renderFile = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile(request, null, function(error, dataHTML) {
        if(error) {
            response.writeHead('404');
            response.write('File not Found');
        } else {
            response.write(dataHTML);
        }

        response.end();
    });
};

// we will export render file
// so, server.js can call that function
module.exports = {
    doRoute : function(uri, response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        // get data after port
        // ex: localhost:8000/user/cakra
        var path = url.parse(uri.url).pathname; // path: user/cakra
        console.log(path);
        
        switch (path) {
            case '/':
                renderFile('index.html', response);  
                break;
            case '/user':
                renderFile('user.html', response);
                break;
            default:
                renderFile('404.html', response);
                break;
        }
    }
};