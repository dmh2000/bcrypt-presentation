// the bcrypt library
const bcrypt = require('bcrypt');

// this package provides the require Promise
// defers to the native implementation if present
const promise = require('promise');

// ==========================================
// NEW USER OR PASSWORD CHANGE
// ==========================================

// get the user and password from the signin UI
const user = 'joe';
const password = 'hello';
const rounds = 10;

// BCRYPT library functions return a Promise if no callback is specified
bcrypt
  .genSalt(rounds)
  .then(salt => {
    console.log({ salt });

    return bcrypt.hash(password, salt);
  })
  .then(hash => {
    console.log({ hash });
    // store_in_user_database('joe','hash')
  })
  .catch(error => {
    console.log(error);
  });
