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

<a href="/bcrypt2.html">This is where bcrypt comes in</a>

<a href="https://github.com/dmh2000/bcrypt-presentation">github.com/dmh2000/bcrypt-presentation</a>
