const user = {
  username: "sam",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to our website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// console.log(this);

function mars() {
  let username = "martian";
  console.log(this);
}

// mars();

// ?arrow function
const venus = () => {
  let username = "martian";
  console.log(this);
};

// venus();

// const addTWo = (num1, num2) => {
//   return num1 + num2;
// };

// arrow function using implicit return
// const addTWo = (num1, num2) => (num1 + num2);

const addTWo = (num1, num2) => ({ username: "martian" });
console.log(addTWo(3, 4));
