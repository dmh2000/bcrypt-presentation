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
async function hashPassword(user, password, rounds) {
  try {
    salt = await bcrypt.genSalt(rounds);
    console.log(salt);
    hash = await bcrypt.hash(password, salt);
    console.log({
      password,
      salt,
      hash
    });
    // store hash in database for 'joe'
    // don't store password or salt
    // ...
  } catch (error) {
    console.log(error);
  }
}

hashPassword(user, password, rounds);
