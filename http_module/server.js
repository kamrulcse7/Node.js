var http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

//  http.createServer((req, res) => {
//     res.end("Hello, I am your firs serve");
// }).listen(3000);

//or
// const server = http.createServer((req, res) => {
//     res.end("Hello, I am your firs serve");
// });
// server.listen(3000, ()=> {
//     console.log("Server is runnnig successfully at localhot:3000")
// });


//or
const server = http.createServer((req, res) => {
    res.end("Hello Bangladesh");
});
server.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});