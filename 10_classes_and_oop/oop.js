//? object literal

// const user = {
//   username: "martian",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     // console.log(`Username:${this.username}`);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);

// ?Constructor function

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome: ${username}`);
  };

  return this;
}

const userOne = new user("clark", 12, true);
const userTwo = new user("bruce", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
