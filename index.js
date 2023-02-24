var http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let name = "Shared Ordaz";
  response.write(`My name is ${name}`);
  response.end();
  
}).listen(8080);


