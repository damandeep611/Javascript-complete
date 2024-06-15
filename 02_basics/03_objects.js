// singleton
//object.create

//object literals
// how to use symbol in objects
const mySym = Symbol("son");

const JsUser = {
  name: "omni",
  lastName: "man",
  [mySym]: "Invincible",
  age: 1500,
  location: "viltrum",
  myEmail: "conquerEarth@viltrum.com",
  isActive: true,
  lastMission: ["earth", "mars", "pluto"],
};

// console.log(JsUser.myEmail);
// console.log(JsUser["myEmail"]);
// console.log(JsUser[mySym]);

// JsUser.myEmail = "invincible@earth.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello jsUser");
};

JsUser.greetingTwo = function () {
  console.log(`hey ${this.name} ${this.lastName} let's fuck up things here `);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
