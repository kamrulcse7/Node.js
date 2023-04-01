const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.writeHead(202, {'Content-Type' : 'text/plain'}) // status code set and content type set
    // res.write('<h1>Kamrul Hasan</h1>');
    // res.end();

    //or
    res.writeHead(202, { 'Content-Type': 'text/html' }) // status code set and content type set
    res.write('<h1>Kamrul Hasan</h1>');
    res.write('<h2>Kamrul Hasan</h2>');
    res.write('<h3>Kamrul Hasan</h3>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`)
});