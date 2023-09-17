//Body Parser

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

  app.use('/add-product',(req,res,next)=>{
    res.send('<h1>adding product page </h1>');
});

//Sadece Get metod request filtreleme
app.get('/add-product',(req,res,next)=>{
    res.send(`
    <html>
            <head><title>Add a new Product</title></head>
                <body>
                    <form action="/product" method= "Post">
                        <input type = "text" name = "productName">
                        <input type = "submit" value = "Save Product">
                     </form>
                </body>
    </html>
    `);
});

/*
app.use('/product-list',(req,res,next)=>{
    res.send(`
    <html>
            <head><title>Add a new Product</title></head>
                <body>
                    <form action="/product" method= "Post">
                        <input type = "text" name = "productName">
                        <input type = "submit" value = "Save Product">
                     </form>
                </body>
    </html>
    `);
});
*/


//Post Get metodu calistirilir.
/*app.use('/product',(req,res,next)=>{
    console.log(req.body); //database kayit
    res.redirect('/');
});
*/

//Sadece Post Metodu Request
app.post('/product',(req,res,next)=>{
    console.log(req.body); //database kayit
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express.js</h1>');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});