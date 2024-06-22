function sumOfTwo(a, b) {
  return a + b;
}
let number = sumOfTwo(2, 4);
// console.log(number);

//* function that returns the length of the string
const stringLength = (str) => str.length;
const checkLength = stringLength("testTheStringLength");
// console.log(checkLength);

// * function that returns average of all the numbers in the array
function calculateAverages(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
// in the form of arrow function
const calAverage = (arr) =>
  arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(calculateAverages(numberArray));

// * function that returns new string with all the vowels removed of input string

const removeVowels = (str) => str.replace(/[aeiou]/gi, "");
console.log(removeVowels("asTheseIllicitOut"));

// *
