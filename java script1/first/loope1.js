// for (let index = 1; index <= 15; index++) {
//   const element = index;
//   console.log(element);
// }
// for (let index = 1; index <= 15; index++) {
//   if (index == 5) {
//     console.log("reach the lebel 5");
//   }
//   const element = index;
//   console.log(element);
// }

// for (let index = 1; index <= 5; index++) {
//   const element = index;
//   console.log(element);

//   for (let j = 0; j < 4; j++) {
//     const element2 = j;
//     console.log(`first ${index} second${j}`);
//   }
// }

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj1 = {
  name: "shaon",
  age: " 18",
  address: "Rajshahi",
};

// // for in gives only "key or index num bar"
// if we want value then  name[key]

// for (const key in num1) {
//   console.log(key);
// }
// for (const key in obj1) {
//   console.log(key);
//   console.log(obj1);
//   // get value+++
//   console.log(obj1[key]);
// }
const projramming = ["java script", "python", "swift"];
for (const key in projramming) {
  // console.log(key);
  // console.log(projramming[key]);
}

//  , for of gives only "value" here dont work object

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj2 = {
  name: "shaon",
  age: " 18",
  address: "Rajshahi",
};
const name = "Rezwan";

// for (const key of num2) {
//   console.log(key);
// }
// for (const key of name) {
//   console.log(key);
// }

//  ,for each,

const languase = ["java", "java script", "python"];

// languase.forEach(function (item) {
//   console.log(item);
// });
// languase.forEach((item) => {
//   console.log(item);
// });

const languase2 = [
  { name: "java script", name2: "python" },
  { name: "js", name2: "py" },
];

languase2.forEach((item, index, array) => {
  // console.log(item.name, index, array);
});

//      map

// const mapadd = new Map();

// mapadd.set("name", "shaon");
// mapadd.set("place", "rajshahi");
// for (const key of mapadd) {
//   console.log(key);
// }
// // if i get key and value
// for (const [key, value] of mapadd) {
//   console.log(key, ":-", value);
// }

// +++++++++++++++++++++++++++

// filter

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarray = array2.filter((iteam) => {
  return iteam >= 5;
});
// console.log(newarray);

// we can use forEach
const newarray2 = [];
array2.forEach((item) => {
  if (item >= 5) {
    newarray2.push(item);
  }
});
// console.log(newarray2);

// +++++++++++++++ map+++++++++=

const info1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubled = info1.map((key) => {
//   return key * 2;
// });
// console.log(doubled);

// const condition = info1.filter((currentvalue) => {
//   return currentvalue % 2 === 0;
// });
// console.log(condition);

const addall = info1.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log("add all value:-", addall);
