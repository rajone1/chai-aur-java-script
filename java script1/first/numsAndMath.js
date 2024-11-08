const num1 = new Number(100);
console.log(num1);
console.log(num1.toString().length);
console.log(num1.toFixed(2));
const n = 1234;
console.log(n.toPrecision(2));

// ++++++++++++++++++++++++++++++++ MAth++++++
// const num = -4
// console.log(Math.abs(-4));
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.8));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.ceil(Math.random() * 10) + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
