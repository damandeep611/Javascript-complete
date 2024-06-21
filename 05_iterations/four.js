const myObject = {
  js: "JavaScript",
  py: "python",
  cpp: "C++",
  rb: "Ruby",
  swify: "Swift by Apple",
};

// * for in loop

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "python", "javascript"];

for (const key in programming) {
  console.log(programming[key]);
}
