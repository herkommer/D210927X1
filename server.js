'use strict';

// Set access to the http module (provided by node)
const http = require('http');

// Create a local server that responds & sends data back to the requestor (browser)
const server = http.createServer();

// Declare a function for what happens when the (incoming) request event triggers
server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Have the server start listening locally to the port 8042
server.listen(8042);

console.log('Server up and listening on port 8042')