const a = 5;
const b = 10;
const c = 10;
const d = '5';

console.log(a > b); // false
console.log(a < b); // true
console.log(b >= c); // true
console.log(b <= c); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log(a == d); // true
console.log(a === d); // false

const t = true;
const f = false;
console.log(t && t); // true
console.log(t && f); // false
console.log(f && t); // false
console.log(f && f); // false

console.log(t || t); // true
console.log(t || f); // true
console.log(f || t); // true
console.log(f || f); // false
