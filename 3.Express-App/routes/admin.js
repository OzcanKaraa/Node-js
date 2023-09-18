const express = require('express');
const app = express();
const router = express.Router();

const path = require('path'); //Path 

//  /admin/add-product => GET  views
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product'));
});

//  /admin/add-product => GET Routers
/*app.get('/add-product',(req,res,next)=>{
    res.send(`
    <html>
            <head><title>Add a new Product</title></head>
                <body>
                    <form action="/admin/add-product" method= "Post">
                        <input type = "text" name = "productName">
                        <input type = "submit" value = "Save Product">
                     </form>
                </body>
    </html>
    `);
});
*/

//  /admin/add-product => POST
app.post('/add-product',(req,res,next)=>{
    console.log(req.body); //database kayit
    res.redirect('/');
});

module.exports = app;
module.exports = router;