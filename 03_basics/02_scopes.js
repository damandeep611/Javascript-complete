let a = 10;
const b = 20;
var c = 30;

function one() {
  const username = "sam";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();
// ++++++++++++++++++++++++++++++++++++++two technicques of making functions

function addOne(value) {
  return value + 1;
}

console.log(addOne(5));
// ====as we have logged addTwo before its declaration so it will show error and the addOne will not, as we are accessing addTwo before it's declaration so it will show error
console.log(addTwo(5));
const addTwo = function (value) {
  return value + 2;
};
