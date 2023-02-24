var http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  let name = "Jared Oaxaca";
  response.write(`The secret name is ${name}`);
  response.end();
  
}).listen(8080);


