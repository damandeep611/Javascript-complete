// ?Array searching and sorting problems

const newList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// *function to check if the input list is in ascending order or not
function checkAscendingOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkAscendingOrder(newList));

// *function which returns the index of the first occurence of a given string in the array

const newStringList = ["superman", "batman", "flash", "Arrow", "Lantern"];

function findIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(findIndex(newStringList));

//* demo of string.prototype.indexOf()
// const paragraph = "I think Ruth's dog is stronger than your dog";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1
//   )}`
// );

//* function returns new object with modified order
const ageObject = [
  { name: "john", age: 25 },
  { name: "jane", age: 30 },
  { name: "bob", age: 20 },
  { name: "alice", age: 30 },
];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(ageObject));

// *function that returns returns second largest number in the array
function secondLargest(arr) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted[1];
}
console.log(secondLargest(newList));

// *function that returns new array from existing array in lexicographical order

function sortOrder(arr) {
  return arr.sort();
}

const orderArray = ["zebra", "apple", "banana", "cherry", "date"];
console.log(aplhaOrder(orderArray));
