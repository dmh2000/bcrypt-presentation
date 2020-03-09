let bcrypt = require('bcrypt-nodejs');

let password = "hello";
let stored_hash = "";

// first generate a random salt
function genSalt(password) {
    return new Promise((resolve,reject) => {
        bcrypt.genSalt(10,function(err,salt) {
            if (err) {
                reject(err);
            }
            else {
                resolve({
                    salt:salt,
                    password:password
                });
            }
        });
    });
}
