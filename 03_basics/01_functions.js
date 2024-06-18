function addTwoNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNumber(3, 5);
// console.log(`result: ${result}`);

function logInUserMessage(username) {
  if (!username) {
    console.log(`please enter a username`);
    return;
  }
  return `${username} just logged in`;
}

// console.log(logInUserMessage("daman"));
// console.log(logInUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 200));
