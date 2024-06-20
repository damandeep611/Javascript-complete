const userEmail = "super@gmail.com";

if (userEmail) {
  console.log("got the user email");
} else {
  console.log("Don't have user email");
}

// *Falsy values

// ? false, 0, -0, 0n in BigInt data type, "", null, undefined, NaN - so all these are falsy values

// * Truthy values

// ? "0" (zero in string), 'false',  " " (any value in string is truthy value even a blank space, ), [], {} so empty array and object is also a truthy value, function(){} - empty function is also truthy

//* Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

// *Ternary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
