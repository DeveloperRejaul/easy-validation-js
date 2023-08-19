# Easy validation js

This is validation library for Javascript . You can use this library server side and front end side.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Installation

Install easy-validation-js with npm

```bash
  npm install easy-validation-js
```

## Features

- Validate string

## Usage/Examples

```javascript
import {Easy} from 'easy-validation-js';
<!-- For String -->
const str1 = 'hello world';
const str2 = 20;
const myStr = Easy.isString(str2, { isRequire:true, message:'string required' });
console.log(myStr); // return string required

```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
