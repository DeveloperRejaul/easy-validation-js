const { Easy } = require('easy-validation-js');

const myObj = { data: 'hello world', status: '200' };
const result = Easy.isObj(myObj);
console.log(result.len(2));
