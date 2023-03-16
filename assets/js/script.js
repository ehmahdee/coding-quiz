var startButton
var quizScreen

let duration = 60;
const countdown = document.getElementById('time');

let timer = setInterval(() => {
    countdown.textContent = duration;
    duration--;
  
    // Check if the timer has expired
    if (duration === 0) {
      clearInterval(timer);
      countdown.innerHTML = "Time's up!";
    }
  }, 1000);
