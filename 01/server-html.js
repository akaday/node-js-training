
var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('./index.html', null, function(error, dataHTML) {
        if(error) {
            response.writeHead('404');
            response.write('File not Found');
        } else {
            response.write(dataHTML);
        }

        response.end();
    });


}).listen(8102);
console.log('Server running at http://127.0.0.1:8102/');