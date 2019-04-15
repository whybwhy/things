const qs = require('qs');

let obj = qs.parse('a=1&b=2');

console.log(`qs.parse: ${obj}`);
console.log(`JSON.stringify(obj): ${JSON.stringify(obj)}`);

let str = qs.stringify(obj);
console.log(`qs.stringify: ${str}`);


