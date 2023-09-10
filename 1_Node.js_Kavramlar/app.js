const path = require('path');

let result = path.resolve('app.js');
console.log(result);
console.log(result.dir);
console.log(result.ext);
console.log(result.name);
console.log(result.base);