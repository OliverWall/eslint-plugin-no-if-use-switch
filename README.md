# eslint-plugin-no-if-use-switch

A plugin that prevents the use of if or ternary operator, requiring a switch instead. Developed for holyJs Head Hunter stand test.

### Valid

```js
switch (a) {
    case 3:
        console.log(true)
        break
    default:
        console.log(false)
}
```

### Invalid

```js
if (a) {
    console.log(true)
} else if (b) {
    console.log(true)
} else {
    console.log(false)
}
```
```js
const a = true ? 'a' : 'b';
```
