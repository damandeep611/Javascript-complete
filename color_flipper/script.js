// first we will make variables
const changeBackground = document.body;

// select links to change the page
const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");
const hslPage = document.getElementById("hsl-page");

// selecting the main color type wrappers
const hexWrapper = document.getElementById("hex-wrapper");
const rgbWrapper = document.getElementById("rgb-wrapper");
const hslWrapper = document.getElementById("hsl-wrapper");

// slecting colors buttons to change color
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const hslColor = document.getElementById("hsl-color");

// now we will add event listener and function to the color page links

// hex page
hexPage.addEventListener("click", function () {
  if (hexPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "block";
    rgbWrapper.style.display = "none";
    hslWrapper.style.display = "none";
    hexPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "none";

    // change the bg color
    changeBackground.style.backgroundColor = hexColor.textContent;
  }
});

//rgb page
rgbPage.addEventListener("click", function () {
  if (rgbPage.style.textDecoration != "underline") {
    rgbWrapper.style.display = "block";
    hexWrapper.style.display = "none";
    hslWrapper.style.display = "none";
    rgbPage.style.textDecoration = "underline";
    hexPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "none";

    // change the bg color
    changeBackground.style.backgroundColor = rgbColor.textContent;
  }
});

// hsl page

hslPage.addEventListener("click", function () {
  if (hslPage.style.textDecoration != "underline") {
    hslWrapper.style.display = "block";
    rgbWrapper.style.display = "none";
    hexWrapper.style.display = "none";
    hslPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";
    hexPage.style.textDecoration = "none";

    // changes the background color
    changeBackground.style.backgroundColor = hslColor.textContent;
  }
});

// now we will add event listener and function to color btns

// ******************HEX button

// arrays of values for the background color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// lets take a random number value
let randomNumberValue;

hexColor.addEventListener("click", function () {
  // save the new bg color
  let hexColorValue = "#";
  // then theprogram will pick a value randomly in the array and adds it to the bg color above
  for (let i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
  // change the text inside the hex button
  hexColor.textContent = hexColorValue;
  // changes the bg color
  changeBackground.style.background = hexColorValue;
});

// *********RGB button event listener and function

rgbColor.addEventListener("click", function () {
  // randomly pick number b/w 0 and 255
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  // save the new rgb bg color
  const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
  // change the text inside rgb button
  rgbColor.textContent = rgbColorValue;
  // now change the bg color
  changeBackground.style.background = rgbColorValue;
});

// **************HSL button

hslColor.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 361);
  let b = Math.floor(Math.random() * 101);
  let c = Math.floor(Math.random() * 101);

  // save the new hsl bg color
  const hslColorValue = `hsl(${a}, ${b}%, ${c}%)`;
  // now chnage the text in hsl button
  hslColor.textContent = hslColorValue;
  // change the bg color
  changeBackground.style.background = hslColorValue;
});
