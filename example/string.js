import { Easy } from 'easy-validation-js';
const o = { data: 'hello' };
const r = Easy.isObj(o).val('data').key('hello');
console.log(r);
