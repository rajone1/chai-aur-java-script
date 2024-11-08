// for (let index = 0; index <= 10; index++) {
//   if (index >= 5) {
//     console.log("reached five");
//   }
//   const element = index;
//   console.log(element);
// }

// for (let index = 1; index <= 5; index++) {
//   const element = index;
//   console.log(element);
//   for (let index2 = 1; index2 <= 10; index2++) {
//     const element2 = index2;
//     console.log(`first${element} second${element2}`);
//   }
// }

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj1 = {
  name: "shaon",
  age: " 18",
  address: "Rajshahi",
};

// for (const key in obj1) {
//   console.log(key);
//   //   console.log(num1[key]);
//   console.log(obj1[key]);
// }

// for (const element of num1) {
//   console.log(element);
// }

// const nam = "Rezwan ahommed";
// for (const element of nam) {
//   console.log(element);
// }

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj2 = [
  {
    name: "shaon",
    age: " 18",
    address: "Rajshahi",
  },
  {
    name: "REzwan",
    age: " 18",
    address: "Rajshahi",
  },
];

obj2.forEach((element) => {
  console.log(element.name);
});

const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj3 = {
  name: "shaon",
  age: " 18",
  address: "Rajshahi",
};

const changeall = num3.map((currentvalue) => {
  return currentvalue * 2;
});
console.log(changeall);

const chackcondition = num3.filter((currentvalue) => {
  return currentvalue > 5;
});
console.log(chackcondition);

const add = num3.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);

console.log(add);
