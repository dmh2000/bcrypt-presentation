// the bcrypt library
const bcrypt = require('bcrypt');

// this package provides the require Promise
// defers to the native implementation if present
const promise = require('promise');

// ==========================================
// LOGIN WITH EXISTING USER
// ==========================================

// user name
const user_from_ui = 'joe';

// get the password  from the ui
const password_from_ui = 'hello';

// lookup the hash in your user database for user 
const hash_from_db = '$2b$10$KOyzKHALl1xiSzqcgLe1OeYbcMDmSwiWlHNWXJLo15oXiHoIhiYfK';

bcrypt
  .compare(password_from_ui, hash_from_db)
  .then(result => {
    console.log('verify result: ', {
      user_from_ui,
      result,
      password_from_ui,
      hash_from_db
    });
    if (result) {
      console.log('do something with VALID password!');
    } else {
      console.log('do something with INVALID password!');
    }
  })
  .catch(error => {
    console.log({
      error,
      user_from_ui,
      password_from_ui
    });
  });
