var startButton
var quizScreen

let duration = 60;
const countdown = document.getElementById('time');

setInterval(()=>{
countdown.textContent = duration;
duration--;
}, 1000);
// // Update the countdown every second
// const timer = setInterval(() => {
//     // Calculate the remaining time in seconds
//   const timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);
  
//     // Update the countdown element with the remaining time
//   countdown.innerHTML = `Time left: ${timeLeft} seconds`;
  
//     // Check if the timer has expired
//   if (timeLeft <= 0) {
//       clearInterval(timer);
//       countdown.innerHTML = "Time's up!";
//   }
//   }, 1000);
  
//   // Get the start time of the timer
//   const startTime = Date.now();

// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();