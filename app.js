'use strict';

const Rijndael = require('./rijndael');
const rijn = new Rijndael('ASecureKey');

let encodeString = rijn.encode('Secret');
let decodeString = rijn.decode(encodeString);

console.log('Encoded: ', encodeString);
console.log('Decoded: ', decodeString);
