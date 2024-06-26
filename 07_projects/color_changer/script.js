const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (superman) {
    if (superman.target.id === "grey") {
      body.style.backgroundColor = superman.target.id;
    }
    if (superman.target.id === "white") {
      body.style.backgroundColor = superman.target.id;
    }
    if (superman.target.id === "blue") {
      body.style.backgroundColor = superman.target.id;
    }
    if (superman.target.id === "yellow") {
      body.style.backgroundColor = superman.target.id;
    }
  });
});
