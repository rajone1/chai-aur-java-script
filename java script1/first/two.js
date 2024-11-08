// memory type

// stack { primiitive }
// heap{non-primitive}

// let name = "shaon";
// let name2 = name;
// name2 = "Rezan";
// console.log(name);
// console.log(name2);

// // heap

// let info = {
//   name: "shaon",

//   phone: 112344,
// };
// // console.log(info.name);
// let info2 = info;

// info2.name = "Rezwan ahommed";
// console.log(info.name);
// console.log(info2.name);
// // bat text
// const name3 = "shaon";

// console.log(`my name is ${name3}`);

// const name4 = new String("Rezwan");
// console.log(name4);
// console.log(name4[1]);
// console.log(name4.indexOf("R"));

let name1 = new String("Bangladesh");
let name2 = new String("      Bang%lade%sh");
console.log(name2.trim());
console.log(name2.split("%"));
console.log(name1);
console.log(name1.toUpperCase());
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1[0]);
console.log(name1.indexOf("B"));
console.log(name1.substring(0, 4));
console.log(name1.slice("-8", "4"));

let url = "shaon%20jjaksgoogle.com";
console.log(url);
let urlreplace = url.replace("%20", "_");
console.log(urlreplace);
let urlinclude = url.includes("shaon");
console.log(urlinclude);

console.log(url.split("%20"));
