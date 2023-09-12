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

