// // if else
// // if (condition) {

// // }
// // else{}

// // const val1 = 5;
// // const val2 = 10;

// // if (val1 === 5) {
// //   console.log("match");
// // } else {
// //   console.log("dont match");
// // }

// // operator
// // < > <= >= == === !== && ||

// const a = "shaon";
// const b = "other";
// const num1 = 5;
// const num2 = 5;
// const num3 = 10;

// // if (num1==5 && num2 ===5) {
// //   console.log("true vaue");
// // } else {
// //   console.log("false value");
// // }
// // if (num1 == 5 && num3 === 5) {
// //   console.log("true vaue");
// // } else {
// //   console.log("false value");
// // }
// if (num1 == 5 || num3 === 5) {
//   console.log("true vaue");
// } else {
//   console.log("false value");
// }

// // switch+++++++++++++++++++++

// // const month = 10;

// // switch (month) {
// //   case 1:
// //     console.log("jan");

// //     break;
// //   case 2:
// //     console.log("feb");

// //     break;
// //   case 3:
// //     console.log("march");

// //     break;
// //   case 4:
// //     console.log("april");

// //     break;
// //   case 5:
// //     console.log("march");

// //     break;

// //   default:
// //     console.log("non of the above");

// //     break;
// // }

// // const month = "feb";
// // const month = "dec";
// // switch (month) {
// //   case "jan":
// //     console.log("find 1st month");

// //     break;
// //   case "feb":
// //     console.log("find 2st month");

// //     break;

// //   default:
// //     console.log("dont find any month");

// //     break;
// // }

// // truthy valu false valu++++++++++++++++++++++++

// // falsy valu = false , "", 0 , -0 ,bigint 0n , null,Null , undefind

// // truthy value = with out false valu all are trurhy vale
// // ex: "0" ,"false", " ",{},[], function(){},

// // find array valu ,emty or not
// const myarr = [];

// if (myarr.length === 0) {
//   console.log("this is emty array");
// }
// // find object valu ,emty or not

// const myobject = {};

// if (Object.keys(myobject).length === 0) {
//   console.log("this is emty object");
// }

// ternary operator its a update syntex like if else

// condition ? true : false

let value1 = 1000;
let value2 = 900;

value1 < value2
  ? console.log("less then value1")
  : console.log("more then value2");

// nullish coalescing operator (??)  = null ,undefind

let number2;

// number2 = 10 ?? 20;
number2 = null ?? 20;

console.log(number2);
