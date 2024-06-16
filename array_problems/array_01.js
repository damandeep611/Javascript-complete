let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function which returns even numbers from a array of numbers
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const result = getEvenNumbers(numbers);
console.log(result);

// function which returns string array with all strings capitalize
let alphabets = ["one", "two", "three", "four", "five"];

function capitalize(cap) {
  return cap.map((str) => str.toUpperCase());
}
const capResult = capitalize(alphabets);
console.log(`the capitalize array: ${capResult}`);

// function which returns the sum of all the numbers in the array
// we will use the 1st array list of name - numbers
function sumOfNumbers(sumNumbers) {
  return sumNumbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumOfNumbers(numbers));

// function that returns maximum number in the array 
function findMaxNumber(arr){
  return Math.max(...arr)
}
console.log(findMaxNumber(numbers));

// function returns new array with duplicate numbers removed
let digits = [1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 8, 9, 10];
function removeDuplicates(arr){
  return [...new Set(arr)]
}
console.log(removeDuplicates(digits));

// new operator 
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon Tsi', 1993)

console.log(car1.make);