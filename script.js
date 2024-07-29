const fs = require('fs');
const path = require('path');

const cjsFilePath = path.join(__dirname, 'lib', 'cjs', 'package.json');
const esmFilePath = path.join(__dirname, 'lib', 'esm', 'package.json');

const cjsContent = {
  type: 'commonjs',
};
const esmContent = {
  type: 'module',
};
// Create directories if they don't exist
fs.mkdirSync(path.dirname(cjsFilePath), { recursive: true });
fs.mkdirSync(path.dirname(esmFilePath), { recursive: true });

// Write the file
fs.writeFileSync(cjsFilePath, JSON.stringify(cjsContent, null, 2), 'utf8');
fs.writeFileSync(esmFilePath, JSON.stringify(esmContent, null, 2), 'utf8');
