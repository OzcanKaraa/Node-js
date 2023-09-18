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