var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;

    if(request.url == '/') {
        url = '/index.html';
    }

    if(request.url == '/career'){
        url = '/lab/cytoscape/cose-bilkent/career_cose-bilkent.html';
    }

    if(request.url == '/javascript'){
        url = '/lab/cytoscape/cose-bilkent/career_cose-bilkent.html';
    }

    if(request.url == '/vue'){
        url = '/lab/vue/';
    }

    if(request.url == '/git') {
        url = '';
    }

    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
