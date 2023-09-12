//Http Module
/*const http = require('http');
const server = http.createServer();
server.on('connection',function(){
console.log('new connection');
});
server.listen(3000);
console.log('Listening port on 3000');
*/


//Request objeleri ozellikleri 
/*
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
});
server.listen(3000);
console.log('Listening port on 3000');



const http = require('http');
const server = http.createServer((req,res)=>{
     console.log(req.url,req.method);
});
server.listen(3000);
console.log('Listening port on 3000');
*/


const http = require('http');
const server = http.createServer((req,res)=>{
   if (req.url=='/') {
    res.write('Hello World');
    res.end();
   }
   if (req.url=='/api/products') {
    res.write('Product list');
    res.end();
   }
});
server.listen(3000);
console.log('Listening port on 3000');