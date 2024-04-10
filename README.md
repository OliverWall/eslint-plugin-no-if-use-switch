# Secure names eslint rule

A variable name should be secure and contain at least 8 letters (uppercase and lowercase), digits and symbols ("$" and "\_").

### Valid

```js
var AbCd35$0;
let At84_567Sd;
```

### Invalid

```js
const abc = 123;
```
