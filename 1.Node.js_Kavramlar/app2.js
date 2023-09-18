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


//Routing Request

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if (url === '/') {
        res.write(`
        <html>
        <head>
             <title>Document</title>
        </head>
        <body>
                <form method = "POST" action = "/log">
                <input type = "text" name = "message">
                <button type = "submit">Save</button>
            </form>
        </body>
        </html>
        `); 
        return res.end();
    }
    if (url === '/log' && method === "POST"){
        //fs.writeFileSync('message.txt','deneme');
        fs.appendFileSync('message.txt','\ndeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
       return  res.end();
    } 
});

server.listen(3000);
console.log('Listening port on 3000');


//Parsing Request Body

const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const { buffer } = require('stream/consumers');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if (url === '/') {
        res.write(`
        <html>
        <head>
             <title>Document</title>
        </head>
        <body>
                <form method = "POST" action = "/log">
                <input type = "text" name = "message">
                <button type = "submit">Save</button>
            </form>
        </body>
        </html>
        `); 
        return res.end();
    }
    if (url === '/log' && method === "POST"){
       //body parsing (bodyParser)
       const body = [];
       req.on('data',(chunk)=>{
        body.push(chunk);
        console.log(chunk);
       })

       req.on('end',()=>{
        const bodyParsed = Buffer.concat(body).toString();
        //Console.log(bodyParsed);
        const message = bodyParsed.split('=')[1];
        console.log(qs.parse(bodyParsed));
        fs.appendFileSync('message.txt',message);
       })
        fs.appendFileSync('message.txt','\ndeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
       return  res.end();
    } 
});

server.listen(3000);
console.log('Listening port on 3000');


// Route Module
const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes);
server.listen(3000);
console.log('Listening port on 3000');


//Events
const EventEmitter = require('events');
class logger extends EventEmitter{
    log(message){
        console.log(message);
  this.emit('connection',{id:1,messaage:'hello world'});
    }
}
module.exports = logger;



//Route Module
const fs = require('fs');
const qs = require('querystring');
const routeHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if (url === '/') {
        res.write(`
        <html>
        <head>
             <title>Document</title>
        </head>
        <body>
                <form method = "POST" action = "/log">
                <input type = "text" name = "message">
                <button type = "submit">Save</button>
            </form>
        </body>
        </html>
        `); 
        return res.end();
    }
    if (url === '/log' && method === "POST"){
        //fs.writeFileSync('message.txt','deneme');
        fs.appendFileSync('message.txt','\ndeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
       return  res.end();
    } 

}
module.exports = routeHandler;




