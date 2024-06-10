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

// this code runs when the window finishes loading and checks if "eyedropper" api is integraetd in code
window.onload = () => {
  // check if the eyedropper api is supported by browser
  if ("EyeDropper" in window) {
    // so if eyedropper supported then show the pickcolor Button
    pickColor.classList.remove("hide");
    // and then initialize the Eyedropper api
    eyeDropper = new EyeDropper();
  } else {
    // and if not supported then show an error message
    error.classList.remove("hide");
    error.innerText = "Your Browser doesn't support the EyeDropper API";
    // and then hide the pick color button as it won't work without the eyedropper api
    pickColor.classList.add("hide");
    return false;
  }
};

// function to handle color selection using the Eyedropper Api
const colorSelector = async () => {
  // use the eyedropper api to open the color picker tool
  const color = await eyeDropper
  .open()
  .then((colorValue) => {
    // hide any previous error messages
    error.classList.add("hide");
    // get the hex color code form the selected color
    let hexValue = colorValue.sRGBHex;
    // convert the hex color code to RGB format
    let rgbArr = [];
    for (let i = 1; i < hexValue.length; i += 2){
      rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
    }
    let rgbValue  = "rgb(" + rgbArr + ")";
    // display the color information
    result.style.display = "grid";
    hexValRef.value = hexValue;
    rgbValRef.value = rgbValue;
    pickedColorRef.style.backgroundColor = hexValue;
  })
  .catch((err) => {
    // show error mesage if ther are any
    error.classList.remove("hide");
    // if user closes the eyedropper tool using the escape key
    if(err.toString().includes("AbortError")) {
      error.innerText = "";
    } else {
      error.innerText = err;
    }
  });
};

// add event listener to the pick color color button to call the color Selector function when clicked
pickColor.addEventListener("click", colorSelector);

// allow the user to choose an image of their own choice
fileInput.onchange = () => {
  // hide previous results when a new image is selected
  result.style.display = "none";
  let reader = new FileReader();
  // read teh selected image file as a data url
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    // set the selected image as the source of the image element
    image.setAttribute("src", reader.result);
  };
};

// Function to copy the color code to the clipboard
let copy = (textId) => {
  // slect the text inside the input element with the given ID
  document.getElementById(textId).select();
  // execute the copy command
  document.execCommand("copy");
  // show a custom alert to indicate that the color code has been copied
  customAlert.style.transform = "scale(1)";
  // hide the custom alert after 2 seconds
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 2000);
};

