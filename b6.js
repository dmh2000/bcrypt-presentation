// the bcrypt library
const bcrypt = require('bcrypt');

// this package provides the require Promise
// defers to the native implementation if present
const promise = require('promise');

// ==========================================
// NEW USER OR PASSWORD CHANGE
// ==========================================

// get the user and password from the signin UI
const uer = 'joe';
const password = 'hello';
const rounds = 14;

t0 = Date.now();
bcrypt
  .hash(password, rounds)
  .then(hash => {
    t = (Date.now() - t0) / 1000.0;
    console.log({
      t,
      hash
    });
    // store_in_user_database('joe','hash')
  })
  .catch(error => {
    console.log(error);
  });
