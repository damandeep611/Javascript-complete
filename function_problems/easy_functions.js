// * function to calculate the area of rectangle
// function areaOfRectangle(length, width) {
//   const area = length * width;
//   return area;
// }
const area = (length, width) => length * width;
const areaResult = area(20, 15);
// console.log(`The area of the rectangle is: ${areaResult}`);

// * function to convert celsius to farenheit
function tempConvert(celsius) {
  let cel = (celsius * 9) / 5 + 32;
  let finalConversion = `the celsius gets converted to ${cel} farenheit`;
  return finalConversion;
}
// console.log(tempConvert(0));

// * function to find the maximum of three numbers
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
// console.log(maxOfThree(2, 4, 77));

// *function that accepts any number of arugments and returns the highest number
function anyNumber(arr) {
  return Math.max(...arr);
}
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(anyNumber(newArr));

// *function that calculate the sum of digits in a number
function sumOfDigits(number) {
  // convert the number to a string
  const numStr = number.toString();
  // using array.from() and reduce() to sum the digits
  const digitSum = Array.from(numStr).reduce(
    (sum, digit) => sum + parseInt(digit),
    0
  );
  return digitSum;
}
const testNumber = 12;
console.log(sumOfDigits(testNumber));

// *Check if a number is even or odd

function oddEven(num) {
  return num % 2 === 0;
}
console.log(oddEven(22));
