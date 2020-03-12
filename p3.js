// the bcrypt library
const bcrypt = require('bcrypt');

// this package provides the require Promise
// defers to the native implementation if present
const promise = require('promise');

// ==========================================
// generating the hash with a Promise
// ==========================================

// hash the password with the salt
function genHash(password, salt) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve({
          salt: salt,
          password: password,
          hash: hash
        });
      }
    }); 
  });
}

const salt = '$2b$10$gqaOmaJuC65IbpyN6K3A8O';
const password = 'hello';

genHash(password, salt)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
