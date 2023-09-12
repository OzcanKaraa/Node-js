//Global Obje
//console.log(window);  Window objesi ile farkli dosyalardan da calistirilabilir.
/*
var firstName = 'Ozcan';
console.log(firstName);
console.log(window);
*/



//Path module  :Dosya uzantisi/yolu      
/*
const path = require('path');
let result = path.resolve('app.js'); //Dosya yolu
result = path.extname('app.js'); //Uzanti
result = path.parse(__filename);
console.log(result.root);
console.log(result.dir);//Klasor ismi
console.log(result.base);//Dosya ismi
console.log(result.ext);//Uzanti ismi
console.log(result.name);
console.log(result);
*/

//Url  Module

/*
const url = require('url');
const address = 'http://ozcankara.com';
let result2 = url.parse(addres,true);
console.log(result2);
console.log(result2.path);
console.log(result2.query.year);
console.log(result2.query.month);

*/
//File System Module :Dosya Islemleri 

//Klasor icerigi okuma 
const fs = require('fs');
const files = fs.readdir('./',function(error,data){
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});

//Dosya okuma islemi
/*const data = fs.readFile('index.html','utf8',function(error,data){
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});
*/

//Dosya olusturma
/*
fs.writeFile('deneme.txt','Hello world',function(error){
    if (error) {
        console.log(error);
    }else{
        console.log('Dosya olusturalamadi');
    }
});


fs.appendFile('deneme1.txt','Hello world...',function(error){
    if (error) {
        console.log(error);
    }else{
        console.log('Dosya olusturalamadi');
    }
});

*/
//Dosya Silme
fs.unlik('deneme1.txt',function(error){
        console.log('Dosya Silindi');
});

//Dosya isimlendirme
fs.rename('deneme1.txt','deneme2.txt',function(error){
    console.log('Dosya ismi degistirildi.');
});


