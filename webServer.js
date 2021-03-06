const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>url: ${req.url}</p>
        <p>request method: ${req.method}</p>
      </body>
    </html>
  `);
});

server.listen(3000);

console.log('Server listening on port 3000');
