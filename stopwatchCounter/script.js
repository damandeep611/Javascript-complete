// declaring variables with reference to the html elements
const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
// variables to track the start time , elapsed time and interval id of the timer

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// function to start the stopwatch
function startTimer() {
  // record the current time minus any elasped time to handle pauses
  startTime = Date.now() - elapsedTime;
  // use setInterval to update the timer display every 10 milliseonds
  timerInterval = setInterval(() => {
    // calculate the elapsed time
    elapsedTime = Date.now() - startTime;
    // update the timer display with the formatted elapsed time
    timer.textContent = formatTimer(elapsedTime);
  }, 10);
  // disabled the start button and enable the stop button
  startButton.disabled = true;
  stopButton.disabled = false;
}

// function to stop the timer
function stopTimer() {
  // stop the interval that updates the timer
  clearInterval(timerInterval);
  // enable the start button and disable the stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}

// function to reset the timer
function resetTimer() {
  // stop the interval that updates the timer
  clearInterval(timerInterval);
  // reset the elapsed time to 0
  elapsedTime = 0;
  // update the timer dispaly to show the reset time
  timer.textContent = "00:00:00";
  // enable both start and stop buttons
  startButton.disabled = false;
  stopButton.disabled = false;
}

// * Function to format the elapsed time into hours, minutes, seconds and milisconds
function formatTimer(elapsedTime) {
  // calculat the number of hours
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  // calculate the number of minutes, removing the hours part
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  // calculate the number of seconds, removing the hours and minutes parts
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  // calculate the number of miliseconds, removing the hours, minutes and seconds
  const mseconds = Math.floor((elapsedTime % 1000) / 10);
  // now it will return the formatted string in the follwing format
  return (
    // fromat hours as : if  hour is 0, display "00"; if hours< 10 prepend "0"; otherwise display minutes
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    // format minutes : if minutes is 0, display "00"; if minutes < 10, prepend "0"; otherwise display minutes
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    // fromat seconds - if seconds is 0, display "00", if sedconds < 10, prepend "0" otherwise display seconds
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    // Format millisec: if milliseconds < 10, prepend "0"; otherwise, display milliseconds
    (mseconds > 9 ? mseconds : "0" + mseconds)
  );
}
// add event listeners to the buttons to start, stop and reset the timer
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
