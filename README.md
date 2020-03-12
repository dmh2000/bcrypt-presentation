## BCRYPT WITH PROMISES IN NODE

### Disclaimer

- I am not a crypto guy
- do your research before using any crypto algorithm

### Cryptographic Hashing : Which One?

1. **CRYPTO IS HARD**
2. **NEVER STORE PASSWORDS IN PLAIN TEXT!**
3. **DON'T INVENT YOUR OWN CRYPTO**

- Facebook
  - 200 to 600 MILLION stored
- Adobe
  - encrypted but not secure
- LinkedIn
  - homegrown crypto hacked
- Twitter
  - saved to internal log after hashing
- T-Mobile Austria
  - thought it was helpful to customer service to verify password

### What Hash To Use?

- MD5?
  - NO
- SHA-1?
  - NO
- SHA-2?, SHA-3?
  - secure
  - not best for passwords
  - too fast!
  - https://en.wikipedia.org/wiki/Secure_Hash_Algorithms

**This is where bcrypt comes in**

<a href="https://github.com/dmh2000/bcrypt-presentation">github.com/dmh2000/bcrypt-presentation</a>

## BCRYPT

- bcrypt is a hashing function designed by Niels Provos and David Mazières in 1999
- specifically intended for use in password hashing
- its proven over 20 years of use
- uses <a href="https://en.wikipedia.org/wiki/Blowfish_(cipher)">Blowfish encryption</a> created by Bruce Schneier
  - hasn't been broken (yet)
- <a href="https://en.wikipedia.org/wiki/Bcrypt">bcrypt in Wikipedia</a>

**The main characteristic of bcrypt that makes it useful for password hashing is that it can be tuned to be slow**

**Bcrypt lets you tune how long it takes to generate the desired hash**

- bcrypt uses a salt to prevent rainbow table attacks
  - without a salt, everyone who uses 'passwd' would have the same hash
  - salt is a 30 character random character string
    - prepended to hash before storing
    - first few bytes are a header indicating crypt used and number of rounds
- tunable generation of the hash can be used to hamper brute force attacks
  - 'rounds' argument indicates number of iterations of the hash algorithm
  - like adding a delay between login attempts
  - time to generate hash doubles for every increment of 'rounds'
  - 'rounds' count can be increased as compute power grows over time
- bcrypt API
  - generating cryptographic random numbers takes time
  - synchronous
    - ok for batch processing
  - asynchronous
    - best for interactive
    - callbacks
    - Promises
    - Async/Await

**Most common languages have a port of bcrypt.**

<a href="https://www.npmjs.com/package/bcrypt">NPM module for node.js : https://www.npmjs.com/package/bcrypt</a>

<a href="https://www.npmjs.com/package/promise">Promise Library for Node if needed : https://www.npmjs.com/package/promise</a>

### Examples

In directory 'example' is a set of , well, examples

- p1.js
  - generate salt with a callback
  - Callback Hell
    - assume new user dialog with validated username/password
      1. verify username is available (database)
      2. hash the password (bcrypt)
      3. store in database
      4. send response
- p2.js
  - generate salt with a Promise
- p3.js
  - generate hash with Promise
  - precomputed salt
- p4.js
  - generate salt and hash with Promise chain
- p5.js
  - verify a password
  - precomputed hash to compare against
  - note
    - one password can have many possible hashes
    - one hash can only resolve to one password (we hope)
- p6.js
  - like p4.js but with timing
- p7.js
  - generate salt and hash with Async/Await

[github.com/dmh2000/bcrypt-presentation](https://github.com/dmh2000/bcrypt-presentation)
