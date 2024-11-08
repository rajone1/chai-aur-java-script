// function first() {
//   console.log("well come function");
// }
// first();

// 2

function addnumber(num1, num2) {
  const add = num1 + num2;
  return add;
}

console.log(addnumber(3, 4));

// 3

function inputusername(username) {
  if (username === undefined) {
    console.log(" please input your name");
    return username;
  }
  const myname = `"input your name", ${username}`;

  return myname;
}

// console.log(inputusername());

// function inputusername(username = "A") {
//   const addusername = username;

//   return addusername;
// }

// console.log(inputusername());

// use mane value in array

// function usemanyValue(...value) {
//   return value;
// }

// console.log(usemanyValue(10, 20, 30));

// function usemanyValue(first, second, ...value) {
//   return value;
// }

// console.log(usemanyValue(10, 20, 30));

// // use object in function

// const info = {
//   name: "Rezwan",
//   id: 999,
// };

// function getobjectinfo(getvalue) {
//   getvalue = `my name ${getvalue.name} my id ${getvalue.id}`;
//   return getvalue;
// }

// console.log(getobjectinfo(info));
// console.log(
//   getobjectinfo({
//     name: "shaon ",
//     id: 99999,
//   })
// );

// use array in function

// const mark = [99, 98888, 97, 90];

// function getarray(array) {
//   const value = `my arrrray ${array[1]}`;

//   return value;
// }

// console.log(getarray(mark));

// arrow function

// simple
const one = (n1, n2) => n1 + n2;
console.log(one(1, 3));

// use object
const two = (user) => ({
  name: "rez",
  id: 222222,
});
console.log(two(this.name));

// if we use {} we must use return
const three = (n1, n2) => {
  return n1 + n2;
};
console.log(three(5, 10));
