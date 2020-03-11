// the bcrypt library
const bcrypt = require("bcrypt");

// this package provides the require Promise
// defers to the native implementation if present
const promise = require("promise");

function genSalt(rounds) {
  return new Promise((resolve, reject) => {
    return bcrypt.genSalt(rounds, function(err, salt) {
      if (err) {
        reject(err);
      } else {
        resolve({
          salt: salt
        });
      }
    });
  });
}

// hash the password with the salt
function genHash(salt, password, rounds) {
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

function genHash2(password, rounds) {
  return bcrypt.hash(password, rounds);
}

function verify(passwd, hash) {
  return new Promise((resolve, reject) => {
    return bcrypt.compare(passwd, hash, (error, valid) => {
      if (error) {
        reject(error);
      } else {
        resolve(valid);
      }
    });
  });
}

// ==========================================================================
function f1(rounds) {
  genSalt(rounds)
    .then(result => {
      console.log("salt", result);
    })
    .catch(error => {
      console.log(error);
    });
}

function f2(password, rounds) {
  genSalt(rounds)
    .then(result => {
      console.log("salt", result);
      return genHash(result.salt, password);
    })
    .then(result => {
      console.log("hash", result);
      // store in databse
      stored_hash = result.hash;
    })
    .catch(error => {
      console.log(error);
    });
}

// lookup user in database and verify the hash
function f3(password, hash) {
  console.log("password :", password);
  console.log("hash    :", hash);
  verify(password, hash)
    .then(result => {
      console.log("verify result: ", {
        result,
        password,
        hash
      });
      if (result) {
        console.log("do something with VALID password!");
      } else {
        console.log("do something with INVALID password!");
      }
    })
    .catch(error => {
      console.log({
        error,
        password,
        hash
      });
    });
}

// const number of rounds of hashing
const rounds = 10;

// passwd = get from signup/login dialog
const passwd_from_ui = "hello";
const password_hack = "goodbye";

// hash = lookupUser("joe")
const hash_from_db = "$2b$10$uHCVr3vu4xzV3J8cPVtDJuLBXfqyZUGDJK1DuNGAOLEV28O3p5J2O";

// just an example
// f1(rounds);

// assume the password is read from login/signup UI
// f2(passwd_from_ui, rounds);

// assume the hash has been looked up for this user
// f3(passwd_from_ui, hash_from_db);

// hash and password don't match
// f3(password_hack, hash_from_db);

function f4(password, rounds, t0) {
  genSalt(rounds)
    .then(result => {
      console.log("salt", result);
      return genHash(result.salt, password);
    })
    .then(result => {
      t1 = (Date.now() - t0) / 1000.0;
      console.log(t1, rounds, result);
      // store in databse
      stored_hash = result.hash;
    })
    .catch(error => {
      console.log(error);
    });
}

for (r = 10; r < 24; ++r) {
  f4(passwd_from_ui, r, Date.now());
}
