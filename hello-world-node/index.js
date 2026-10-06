const http = require('node:http');
const port = process.env.PORT || 3000;
const routes = {
  'GET /hello': (req, res) => res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Hello world'),
};
http.createServer((req, res) => {
  const handler = routes[`${req.method} ${req.url.split('?')[0]}`];
  if (handler) return handler(req, res);
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
}).listen(port, () => console.log(`Server listening on http://localhost:${port}`));
