// ?ARRAY TRANSFORMATION probelms

// *function that returns new array where each element is the square of the corresponding element in the original array
let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareArray(arr) {
  return arr.map((num) => num ** 2);
}
console.log(squareArray(newNumbers));

// *function that returns new array where each string is repeated n times (where n is a given number)
