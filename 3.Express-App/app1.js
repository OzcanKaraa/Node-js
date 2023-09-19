const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/products',(req,res) =>{
    res.send('urunler listelendi');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
--------------------------------------------------------------------------------------------------
/*
Middleware : Codding fonksiyonu parametre alarak (request,response,next) parametreleri geriye response dondurme.
Next fonksiyonu ile middleware gecisleri saglanir.Request response surecleri gerceklesir.Response ile sureci sonlandirilabilir.
*/
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Middleware 1 çalistirildi.");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware 2 çalistirildi.");
    res.send('<h1>hello from express.js</h1>');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
--------------------------------------------------------------------------------------------------

//Routing : Url yonlendirme
const express = require('express');
const app = express();

//middleware
app.use('/add-product',(req,res,next)=>{
   console.log('Loglama Yapildi..');
   next();
});

 /* app.use('/add-product',(req,res,next)=>{
    res.send('<h1>adding product page </h1>');
});
*/

app.use('/product-list',(req,res,next)=>{
    res.send('<h1>Product Listing page </h1>');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express.js</h1>');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

--------------------------------------------------------------------------------------------------
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

--------------------------------------------------------------------------------------------------
//Express Router

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
app.use(bodyParser.urlencoded({extended:false}));
const path = require('path');
//routes
app.use('admin',adminRoutes);
app.use('admin',userRoutes);

//Error Sayfasi (404)  Html Sayfa Gönderimi
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

  //Error Sayfasi (404) 
/*app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>');
   //    res.status(404);
   //   res.send('<h1>Page not found</h1>');
});
*/

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});