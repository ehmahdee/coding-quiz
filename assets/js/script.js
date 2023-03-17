// let duration = 60;
// var countdown = document.getElementById('time');

// let timer = setInterval(() => {
//     countdown.textContent = duration;
//     duration--;
  
//     if (duration === 0) {
//       clearInterval(timer);
//       countdown.innerHTML = "Time's up!";
//       localStorage.setItem('mostRecentScore', score);

//       return window.location.assign('./end.html')
//     }
//   }, 1000);

// var question = document.querySelector('#question')
// var choices = Array.from(document.querySelectorAll('.choice-text'));

var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');
var timeLeftEl = document.querySelector('#timeLeft');
var timeLeft = 120;
timeLeftEl.innerHTML = timeLeft;

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = {};

// var currentQuestion = {}
// var acceptingAnswers = true
// var score = 0
// var questionCounter = 0
// var availableQuestions = []

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    }, {
        question: "The condition in an if/else statement is enclosed witihin _____",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 2
    }, {
        question: "Arrays in JavaScript can be used to store _____",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    }, {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "commas",
        choice4: "parentheses",
        answer: 1
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    }
];

function startTimer() {
    var timer = setInterval(function(){
        timeLeft = timeLeft-1;
        timeLeftEl.innerHTML = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign('./end.html');
        }
    }, 1000);
}

startTimer();

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
};

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset['number'];
    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct'){
        incrementScore(SCORE_POINTS);
    } else {
        timeLeft -=10; 
        timeLeftEl.innerHTML = timeLeft;
    }
    
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestions();
    }, 1000);
});
});

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame();