//Sending Response
/*
const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.statusCode=200;
    res.statusMessage='Ok';
    res.write('Hello World Response');
    res.end();
});
server.listen(3000);
console.log('Listening port on 3000');

*/

//Json
/*
const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.statusCode=200;
    res.statusMessage='Ok';
    res.write(JSON.stringify({name:'MacBook',price:25000}));
    res.end();
});
server.listen(3000);
console.log('Listening port on 3000');
*/


//Html

/*
const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.statusMessage='Ok';
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from NodeJS Server</h1></body>');
    res.write('</head>');
    res.end();
});
server.listen(3000);
console.log('Listening port on 3000');
*/



const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.readFile ('index.html',function(error,file){
        if(error){
            res.setHeader('Content-Type','text/plain');
            res.statusCode=404;
            res.statusMessage='Not Found';
            res.end('Dosya Bulunamadi.');
        }else{
            res.setHeader('Content-Type','text/html');
            res.statusCode=200;
            res.statusMessage='Ok';
            res.end(file);
        }
    })
});