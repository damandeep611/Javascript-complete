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
