import crypto from 'crypto';
import fs from 'fs';

let publicKey = fs.readFileSync('./public.pem');

let privateKey = {
    key: fs.readFileSync('./private.pem'),
    passphrase: process.env.PASSPHRASE
};

let data = 'Test string';
// Encryption
let encrypted  = crypto.publicEncrypt(publicKey, Buffer.from(data)).toString('base64');

console.log('Encrypted: '+data);
console.log('Result: '+encrypted);


// Decryption
let decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encrypted, 'base64')).toString('utf-8');

console.log('Decrypted: '+decrypted);


