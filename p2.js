// the bcrypt library
const bcrypt = require('bcrypt');

// this package provides the require Promise
// defers to the native implementation if present
const promise = require('promise');

// ==========================================
// generating the salt with a Promise
// ==========================================

function genSalt(rounds) {
  return new Promise((resolve, reject) => {
    return bcrypt.genSalt(rounds, function(err, salt) {
      if (err) {
        // callback failed
        reject(err);
      } else {
        // callback succeeded
        resolve(salt);
      }
    });
  });
}

genSalt(10)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
