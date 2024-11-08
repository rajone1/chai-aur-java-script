const mysym1 = Symbol("WEB");
const myobject = {
  [mysym1]: "REZ",
  name: "shaon",
  age: 18,
  email: "Rez@gmail",
  address: "rajshai",
  education: ["ssc", "hsc", "bba", "Mba"],
};
// we can change value
myobject.email = "Sha@gmail";

// console.log(myobject);
// console.log(myobject.name);
// console.log(myobject["name"]);

// // symbol output
// console.log(myobject[mysym1]);

// find key ,value

// console.log(Object.keys(myobject));
// console.log(Object.values(myobject));

// part 2

// const createobject= new Object("")

const createobject = {};

createobject.name = "SHAON";
createobject.addree = "dur";

// console.log(createobject.name);

// add 2 object
const first = {
  name: "shaon",
  age: 18,
  email: "Rez@gmail",
  address: "rajshai",
  education: ["ssc", "hsc", "bba", "Mba"],
};

const second = {
  name2: "eva",
  phone: "0177",
  edu: "bacelor",
};

const addall = { ...first, ...second };

// console.log(addall);

// nesting

const first1 = {
  name: "sh",
  fullname: {
    first: "shaon",
    second: "ahommed",

    other: {
      phone: "0177",
    },
  },
};
// console.log(first1.fullname.other);

// destucturing

const destucturing = {
  name: "rezwan",
  phone: 0177,
  present_address: "durgapur",
};

// const { present_address } = destucturing;
const { present_address: address } = destucturing;

console.log(destucturing);
// console.log(present_address);
console.log(address);
