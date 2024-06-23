// * calcuate the average of an array that takes numbers and returns the average
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
const numberArray = [2, 4, 6, 8, 10];
// console.log(calculateAverage(numberArray));
