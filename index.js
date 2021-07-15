/*
This is used to decrypt JWT encrypted messages.
ENCRYPTION KEYS MUST MATCH WHEN ENCRYPTING AND DECRYPTING!
*/
require('dotenv').config()
const jwtEncrypt = require('jwt-token-encrypt');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Encryption settings
const encryption = {
  key: process.env.ENCRYPTION_KEY,
  algorithm: 'aes-256-cbc',
};
console.log('\nInput an encrypted JWT message and get the response\n');

const readInput = async () => {
  readline.question('Encrypted message:\n', async input => {
    try{
      const decrypted = jwtEncrypt.readJWT(input, encryption);
      console.log(JSON.stringify(decrypted));
    } catch (e) {
      console.log('\nINVALID JWT\n');
    }

    readInput();
  });
};

readInput();
