// app.js
const http = require('http');
const currentDateTime =require("./myFirstModule");
const uc = require("upper-case");

http.createServer( (req, res)=> {
    const message =uc.upperCase("hello world");
    res.end('hello world!'+ currentDateTime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');