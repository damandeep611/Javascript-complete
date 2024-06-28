// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// function getUserGuess() {
//   return parseInt(document.getElementById("userGuess").value);
// }

// function playGame() {
//   let randomNumber = generateRandomNumber();
//   let attempts = 0;
//   let feedback = document.getElementById("feedback");
//   let guessButton = document.getElementById("guessButton");
//   let restartButton = document.getElementById("restartButton");

//   guessButton.addEventListener("click", function () {
//     let guess = getUserGuess();
//     attempts++;

//     if (guess > randomNumber) {
//       feedback.textContent = "Too high! Try again.";
//     } else if (guess < randomNumber) {
//       feedback.textContent = "Too low! Try again.";
//     } else {
//       feedback.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
//       guessButton.style.display = "none";
//       restartButton.style.display = "block";
//     }
//   });

//   restartButton.addEventListener("click", function () {
//     randomNumber = generateRandomNumber();
//     attempts = 0;
//     feedback.textContent = "";
//     guessButton.style.display = "block";
//     restartButton.style.display = "none";
//     document.getElementById("userGuess").value = "";
//   });
// }

// playGame();

// ? method 2nd of number guessing javascript code

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//* functions  for game logic

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed the right number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guess is Toooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guess is Tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new G</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
