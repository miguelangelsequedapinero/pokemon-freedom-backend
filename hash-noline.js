const md5 = require('md5');

const passwordToHash = process.argv[2];

const salt = process.argv[3] || 'SECRET_HERE';

console.log( md5(passwordToHash + salt) );
console.log(md5(passwordToHash));
