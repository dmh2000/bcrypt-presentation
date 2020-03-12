// the bcrypt library
const bcrypt = require('bcrypt');

// ==========================================
// generating the salt with a callback
// ==========================================

// number of iterations of encryption
const rounds = 10;

bcrypt.genSalt(rounds, function(err, salt) {
  if (err) {
    console.log(error);
  } else {
    console.log(salt);
  }
});
