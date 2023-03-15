var startButton
var quizScreen

const duration = 60;
const countdown = document.getElementById("countdown")

// Update the countdown every second
const timer = setInterval(() => {
    // Calculate the remaining time in seconds
  const timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);
  
    // Update the countdown element with the remaining time
  countdown.innerHTML = `Time left: ${timeLeft} seconds`;
  
    // Check if the timer has expired
  if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.innerHTML = "Time's up!";
  }
  }, 1000);
  
  // Get the start time of the timer
  const startTime = Date.now();