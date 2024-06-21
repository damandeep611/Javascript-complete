// * for of loop

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const num of arr) {
  //console.log(num);
}

const greetings = "Martian man";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// * Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// *using for in loop
for (const key in map) {
  console.log(map[key]);
}

// ? the above code is not executing in for in loop because map is not a iterable object
