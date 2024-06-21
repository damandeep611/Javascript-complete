// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);
}

for (let i = 0; i <= 5; i++) {
  // console.log(`Outer loop this is : ${i}`);
  for (let j = 0; j < 4; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + "*" + j + " =" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

// ? break and continue

// *break
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

// *continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
