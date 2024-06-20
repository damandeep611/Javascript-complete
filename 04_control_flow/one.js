// if

// const isUserloggedIn = true;

// if (2 === "2") {
//   console.log("executed");
// }

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 700");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("allow to shop and buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged IN");
}
