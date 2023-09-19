console.log("Hello World");
var name = "Ozcan Kara";

//Global Obje
console.log(window);  // Window objesi ile farkli dosyalardan da calistirilabilir.

var firstName = 'Ozcan';
console.log(firstName);
console.log(window);

//GLOBAL OBJE
var firstName = 'Ozcan';
console.log(firstName);
console.log(window);

//GLOBAL OBJE
var lastName = 'Kara';
console.log(lastName);

//Global METOTLAR
window.console.log()
window.setInterval
Window.setTimeout(() => {
}, timeout);
window.clearTimeout

var lastName = 'Kara';
console.log(global.lastName);
console.log(global);

//Module - IIFE -ScopeC
var controllerC = (function(){
    var firstName = 'Ozcan';
    var log = function () {
        console.log(this.firstName);
    }
    return  {
        firstName,
        log
    }
})();

console.log(global.module);
console.log(module);

var firstName = 'Ozcan';
var age = 24;
    var log = function (name) {
        console.log(name);
    }

module.exports.name = firstName;  
module.exports.log = log; 
 module.exports = {
    firstName,
    log
 };

 // __DIRNAME 
 // __FILENAME
 console.log(__filename); //Dosya Yolu
 console.log(__dirname); // Klasor yolu 
 var firstName = 'Ozcan';
     var log = function (name) {
         console.log(name);
     }
  module.exports = {
     firstName,
     log
  };

  //Module  -IIFE - ScopeD
var controllerD = (function(){
    var firstName = 'Kara';
    return  {
        firstName,
        log
    }
})();
console.log(controllerC.firstName);
console.log(controllerD.firstName);
const scriptC = require('./scriptC');
scriptC.log('O.K');
console.log(scriptC.name);
console.log(scriptC.age);

//Path module  :Dosya uzantisi/yolu      
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


//Url  Module
const url = require('url');
const address = 'http://ozcankara.com';
let result2 = url.parse(addres,true);
console.log(result2);
console.log(result2.path);
console.log(result2.query.year);
console.log(result2.query.month);


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
const data = fs.readFile('index.html','utf8',function(error,data){
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});

//Dosya olusturma
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

//Dosya Silme
fs.unlik('deneme1.txt',function(error){
        console.log('Dosya Silindi');
});

//Dosya isimlendirme
fs.rename('deneme1.txt','deneme2.txt',function(error){
    console.log('Dosya ismi degistirildi.');
});

//Events Module
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('connection',function (args) {
    console.log('Baglanti kuruldu.',args);
})
emitter.emit('connection',{id:1,messaage:'hello world'});


//Logger sayfasi ile
const logger = require('./logger');
const logger = new logger();
logger.on('connection',function (args) {
    console.log('Baglanti kuruldu.',args);
})
logger.log('ozcan login oldu');






