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