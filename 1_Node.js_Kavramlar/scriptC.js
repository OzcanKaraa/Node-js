//Module - IIFE -ScopeC

/*
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
*/

//console.log(global.module);
//console.log(module);
/*
var firstName = 'Ozcan';
var age = 24;
    var log = function (name) {
        console.log(name);
    }
*/
// module.exports.name = firstName;  
 //module.exports.log = log; 

/* module.exports = {
    firstName,
    log
 };
*/


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

