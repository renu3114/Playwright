let a = 10;
let b = 20;

console.log("Before swapping:");
console.log("a = " + a);
console.log("b = " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a = " + a);
console.log("b = " + b);

//or by using destructuring

let c = 10;
let d = 20;

[c, d] = [d, c];

console.log("c = " + c);
console.log("d = " + d);