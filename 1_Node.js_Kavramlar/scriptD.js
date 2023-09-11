//Module  -IIFE - ScopeD

/*
var controllerD = (function(){
    var firstName = 'Kara';
    return  {
        firstName,
        log
    }
})();
console.log(controllerC.firstName);
console.log(controllerD.firstName);
*/

const scriptC = require('./scriptC');
scriptC.log('O.K');
console.log(scriptC.name);
console.log(scriptC.age);