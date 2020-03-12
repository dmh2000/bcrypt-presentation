# BCRYPT

- bcrypt is a hashing function designed by Niels Provos and David Mazières in 1999
- specifically intended for use in password hashing
- its proven over 20 years of use
- uses <a href="https://en.wikipedia.org/wiki/Blowfish_(cipher)">Blowfish encryption</a> created by Bruce Schneier
  - hasn't been broken (yet)
- <a href="https://en.wikipedia.org/wiki/Bcrypt">bcrypt in Wikipedia</a>

**The main characteristic of bcrypt that makes it useful for password hashing is that it can be tuned to be slow**

**Bcrypt lets you tune how long it takes to generate the desired hash**

- bcrypt uses a 30 character salt to prevent rainbow table attacks
  - without a salt, everyone who uses 'passwd' would have the same hash
- tunable generation of the hash can be used to hamper brute force attacks
  - 'rounds' argument indicates number of iterations of the hash algorithm
  - like adding a delay between login attempts
  - time to generate hash doubles for every increment of 'rounds'
  - 'rounds' count can be increased as compute power grows over time

Most common languages have a port of bcrypt.
<a href="https://www.npmjs.com/package/bcrypt">NPM module for node.js</a>

<a href="https://www.npmjs.com/package/promise">Promise Library for Node if needed</a>

<a href="https://github.com/dmh2000/bcrypt-presentation">github.com/dmh2000/bcrypt-presentation</a>

<a href="bcrypt1.html">Back</a>
