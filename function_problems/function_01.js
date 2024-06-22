// ?Write a function that takes an arbitrary number of arguments and returns the sum of all the arguments
function sumOfArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumOfArgs(2, 3, 4, 5, 6));

//* the same function in the arrow function form and this method is preferred now - i.e using rest parameter syntax
const argsSum = (...args) => args.reduce((sum, arg) => sum + arg, 0);
console.log(argsSum(3, 4));

// example problem of the above problem with diff elements
const addition = (...addit) => addit.reverse((sumit, add) => sumit + add, 0);
console.log(addition(2, 3, 4, 5, 6, 7, 8, 9));

// *Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

function capitalizedWords(str) {
  return str
    .split("")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const capString = ["hello", "context", "jumbo"];
console.log(capitalizedWords("hello"));

// ?now as a arrow function
const capWords = (str) =>
  str
    .split("")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

console.log(capWords("spiderman"));

// *Write a function that takes an array of objects and a property name as input, and returns a new array containing only the objects that have a truthy value for the specified property.

const people = [
  { name: "Alice", age: 25, employed: true },
  { name: "Bob", age: 30, employed: false },
  { name: "Charlie", age: 35, employed: true },
  { name: "David", age: 40, employed: false },
  { name: "Eve", age: 45, employed: true },
];

function filterObjects(arr, prop) {
  return arr.filter((obj) => obj[prop]);
}
const employedPeople = filterObjects(people, "employed");
console.log(employedPeople);



