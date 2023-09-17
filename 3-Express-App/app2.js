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