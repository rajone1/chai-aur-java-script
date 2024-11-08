// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

// ++++++++++

function one() {
  const name = "shaon";

  function two() {
    const age = 30;
    console.log(name + age);
  }
  two();
  // here is the scope
  //   console.log(age);
}
one();

// loop in scope

if (true) {
  const name = "rezwan";

  if (name === "rezwan") {
    const id = 11;
    console.log(name + id);
  }

  //   console.log(id);
}

// ++++++++++++++++++=interesting +++++++++

one();
function one() {
  console.log("print one");
}

// second way if we use variable const we can not call "two()" top of the function

two();
const two = function () {
  console.log("print two");
};
