// ?ARRAY TRANSFORMATION probelms

// *function that returns new array where each element is the square of the corresponding element in the original array
let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareArray(arr) {
  return arr.map((num) => num ** 2);
}
console.log(squareArray(newNumbers));

// *function that returns new array where each string is repeated n times (where n is a given number)
const languages = ["python", "java", "ruby", "javascript"];

function repeatStrings(arr, n) {
  return arr.flatMap((str) => Array(n).fill(str));
}
console.log(repeatStrings(languages, 2));

// * Write a function that takes an array of objects as input, where each object represents a product with properties name, price, and quantity. The function should return a new array containing only the names of the products with a quantity greater than zero.

const userInfo = [
  { name: "Product A", price: 10, quantity: 5 },
  { name: "Product B", price: 20, quantity: 0 },
  { name: "Product C", price: 15, quantity: 3 },
];

function getProductsWithQuanity(arr) {
  return arr
    .filter((product) => product.quantity > 0)
    .map((product) => product.name);
}
console.log(getProductsWithQuanity(userInfo));

// * Write a function that takes an array of numbers as input and returns a new array with all the prime numbers from the original array.

const mainNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 131, 415, 16];

function findPrimeNumbers(arr) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter((num) => isPrime(num));
}
console.log(findPrimeNumbers(mainNumbers));

// *Write a function that takes an array of strings as input and returns a new array with all the strings reversed (e.g., "hello" becomes "olleh").

function reverseString(arr) {
  return arr.map((str) => str.split("").reverse().join(""));
}
console.log(reverseString(languages));
