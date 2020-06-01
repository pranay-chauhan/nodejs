var fs = require('fs');
var http = require('http')
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
      //here we are using the readFile for the reading the demo.html content
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080,()=>console.log('Hello'));