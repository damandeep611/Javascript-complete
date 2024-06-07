// prmitive Data types

// there are 7 primitve data types :- 1. String 2. Number 3. Boolean 4. Null 5. undefined 6. Symbol 7. BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 343241351512434545n;

// Reference data types or non-primitive data types -
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga", "bongo"];

let myObj = {
  name: "martian",
  age: 22,
  work: "hitman",
};

const myFunction = function () {
  console.log("hey Baby");
};

// how to find data type of variable
console.log(typeof bigNumber);
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (non-primitive types)

let myYoutubename = "martian man"

let anothername = myYoutubename
anothername = "omni man"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
  email: "useremail@gg.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "omni@google.com"

console.log(userOne.email);
console.log(userTwo.email);
