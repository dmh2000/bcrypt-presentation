let bcrypt = require("bcrypt");

// NOTE : with node >= 12.0, the bcrypt functions return a promise
// if a callback is not specified. this example supports node < 12.0

// if node version < 12 (also include a Promise package)
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

// if node version >= 12.0
function genSalt2(rounds) {
  return bcrypt.genSalt(rounds);
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
      console.log("verify result: ", result);
      if (result) {
        console.log("do something with valid password!");
      } else {
        console.log("do something with invalid password!");
      }
    })
    .catch(error => {
      console.log(error);
    });
}

// const number of rounds of hashing
const rounds = 10;

// passwd = get from signup/login dialog
const passwd_from_ui = "hello";

// hash = lookupUser("joe")
const hash_from_db = "$2b$10$lcXuO9M808f1X1OWqJJ7c.rAG4l1kwHohaPEZ6q0N5sNTDfV2VDfG";

// f1(rounds)
// f2(passwd_from_ui, rounds)
// f3(passwd_from_ui, hash_from_db);
