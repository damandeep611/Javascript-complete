// js
// initial reference to DOM Elements
let pickColor = document.getElementById("pick-color");
let error = document.getElementById("error");
let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");
let customAlert = document.getElementById("custom-alert");
let pickedColorRef = document.getElementById("picked-color-ref");
let eyeDropper;

window.onload = () => {
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerText = "your Browser doesn't support eyedropper api";
    pickColor.classList.add("hide");
    return false;
  }
};

//function to handle color selection using eyedropper
const colorSelector = async () => {
  const color = await eyeDropper
    .open()
    .then((colorValue) => {
      error.classList.add("hide");
      // get the hex color code
      let hexValue = colorValue.sRGBHex;
      // convert hex value to rgb
      let rgbArr = [];
      for (let i = 1; i < hexValue.length; i += 2) {
        rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
        console.log(rgbArr);
      }
      let rgbValue = "rgb(" + rgbArr + ")";
      console.log(hexValue, rgbValue);
      // display collor information
      result.style.display = "grid";
      hexValRef.value = hexValue;
      rgbValRef.value = rgbValue;
      pickedColorRef.style.backgroundColor = hexValue;
    })
    .catch((err) => {
      error.classList.remove("hide"); //to show erro rmesage
      // if user closes the eyedropper using escape key
      if (err.toString().includes("AbortError")) {
        error.innerText = "";
      } else {
        error.innerText = err;
      }
    });
};

// event listener for pick color button click

pickColor.addEventListener("click", colorSelector);

// Allow user to choose image of their own choice

fileInput.onchange = () => {
  result.style.display = "none";
  let reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
  };
};

// function to copy the color code
let copy = (textId) => {
  document.getElementById(textId).select();
  document.execCommand("copy");

  customAlert.style.transform = "scale(1)";
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 2000);
};
