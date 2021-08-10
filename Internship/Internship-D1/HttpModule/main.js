const http = require('http');
const server = http.createServer((req, res) => {
    Response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hello World</h1>');
    response.end();
});
server.listen(3000, () => console.log("Server Running on Local Host on Port 3000");
