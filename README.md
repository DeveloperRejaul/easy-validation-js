# Easy validation js

This is validation library for Javascript . You can use this library server side and front end side.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Installation

Install easy-validation-js with npm <br>

```bash
  npm install easy-validation-js
```

## Features

- Validate string
- Validate number
- Validate boolean
- Validate array
- Validate object

## Usage/Examples

#### String and number

```javascript
const { Easy } = require('easy-validation-js'); // CommonJS
import { Easy } from 'easy-validation-js'; // ESM
// for string data
const str1 = 'hello world';
const str2 = 20;
const myStr = Easy.isString(str2, {
  isRequire: true,
  message: 'string required',
  error: true, // when you enable the error you crashed server;
});
console.log(myStr); // return string required

// for number data
const num1 = 10;
const num2 = 'hello world';

const myNum = Easy.isNumber(num2, {
  isRequire: true,
  message: 'number value required',
});
console.log(myNumber);
```

### Object use cases

```javascript
const { Easy } = require('easy-validation-js'); // CommonJS
import { Easy } from 'easy-validation-js'; // ESM

const myObj = { data: 'hello world', status: '200' };
// check is object
const isObj = Easy.isObj(myObj, { isRequire: true, message: 'obj required' });

// check object key
isObj.key('data status');

// check object length
isObj.len(2);

// check this key must exist in object
const result = Easy.obj(myObj).keySome('status');
console.log(result); // return true

const result2 = Easy.obj(myObj).keySome('name');
console.log(result2); //return key same required

const result3 = Easy.obj(myObj).keySome('name', {
  message: 'need same key',
  isRequire: true,
  error: false,
});
console.log(result3); //return need same key

// check value type when all of value same type
const myObj = { data: 'hello world', status: 200 };
const result = Easy.obj(myObj).valType('string'); // you can also pass option
console.log(result); // return string type required

// check object with defining schema like this
const myObj = { data: 'hello world', status: 200, isOk: true };
const sch = { data: 'string', status: 'number' };
const result = Easy.obj(myObj).schema(sch); // return true

const sch2 = { data: 'string', status: 'string' };
const result2 = Easy.obj(myObj).schema(sch2); // return type required

// note: schema method don't check additional key type . if you need strictly check you can use schemaStrict method.
const result3 = Easy.obj(myObj).schemaStrict(sch2); //return type required
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
