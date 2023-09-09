var age= 24;
var firstname = 'Ozcan';
var log = function (name) {
    console.log(name);
}

//module.exports.name = firstname;
//module.exports.log = log;

module.exports={
    name:firstname,
    log:log
}
//console.log(firstname);
//console.log(window);

/*console.log(fname);



//IIFE
var controller A = (function () {
    //scopeA
    var firstname = 'Ozcan';
})();
*/

