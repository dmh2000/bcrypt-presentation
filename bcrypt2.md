# BCRYPT

- bcrypt is a password hashing function designed by Niels Provos and David Mazières in 1999
- specifically intended for use in password hashing
- <a href="https://en.wikipedia.org/wiki/Bcrypt">bcrypt in Wikipedia</a>

**The main characteristic of bcrypt that makes it useful for password hasing is that it can be tuned to be slow**

Bcrypt lets you tune how long it takes to generate the desired hash

- slow generation of the hash can be used to hamper brute force attacks
  - like adding a delay between login attempts
  - iteration count can be increased as compute power grows over time
- It also supports generating a salt to prevent rainbow table attacks
  - without a salt, everyone who uses 'passwd' would have the same hash
- its proven over 20 years of use

Most common languages have a port of bcrypt.
<a href="https://www.npmjs.com/package/bcrypt">NPM module for node.js</a>

<a href="https://github.com/dmh2000/bcrypt-presentation">github.com/dmh2000/bcrypt-presentation</a>

<a href="bcrypt1.html">Back</a>
