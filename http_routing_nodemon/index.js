//npm init -y (ignore to Manual settings in npm)
// npm install nodemon (use to reload sever)
// npm start (use to start server)

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    //    console.log(req.url);
    //     res.end("Welcome");

    const readFile = (statusCode, filePath) => {
        fs.readFile(filePath, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    };
    if (req.url == '/') {
        // fs.readFile('./views/index.html', (err, data) => {
        //     res.writeHead(200, { "Content-Type": "text/html" });
        //     res.write(data);
        //     res.end();
        // })
        
        //or

        readFile(200, './views/index.html');
    } else if (req.url == '/about') {
        readFile(200, './views/about.html');
    } else if (req.url == '/contact') {
        readFile(200, './views/contact.html');
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`)
});