// var os  = require('os');
// console.log(os);

// creating server in node js using plain js

var http = require("http");
const { dirname } = require("path");
const hostname = '127.0.0.1';
const port  = 3000;

const server  = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello world! \n');
});

// server.listen(port, hostname, ()=>{
//     console.log(`server running at  http://${hostname}: ${port}/`);
// });

console.log(__dirname);
console.log(__filename);