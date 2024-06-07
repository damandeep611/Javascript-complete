const name = "xavier";
console.log(typeof name);
const repoCount = 50;

// console.log(name + repoCount + "biatch");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("omni Man show");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("M"));

const newString = gameName.substring(0, 2);
console.log(newString);

const anotherString = gameName.slice(-4, 8);
console.log(anotherString);

const newStringOne = "  this is a   String method";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://invincible.com/omn%30man";

console.log(url.replace("%30", "_"));

console.log(gameName.split("-"));
