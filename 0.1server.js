var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8124, "10.0.0.70");
console.log('Server running at http://10.0.0.70:8124/');