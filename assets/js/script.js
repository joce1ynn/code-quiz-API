// quiz content
const quizData = [
  {
    question: "What is the command we use to create a new file? ",
    a: "touch",
    b: "pwd",
    c: "mkdir",
    d: "cd",
    correct: "a",
  },
  {
    question:
      "When creating a form with HTML, which of the following is not typically used? ",
    a: "<label> for the name of the input field",
    b: "<input> for the type of input the user is expected to provide, like text or email",
    c: "<header> for the title of the form",
    d: "<button> for allowing the user to submit their data after they have filled out the form",
    correct: "c",
  },
  {
    question:
      "When using flexbox, which property needs to be adjusted in order to add space between items? ",
    a: "justify-content",
    b: "flex-flow",
    c: "align-content",
    d: "space-between",
    correct: "a",
  },
  {
    question: "What is one advantage of Responsive Design for a developer? ",
    a: "Faster page loading time",
    b: "Faster development",
    c: "More social sharing",
    d: "Improved SEO",
    correct: "b",
  },
  {
    question:
      "Which of the following type of variable is visible everywhere in your JavaScript code?",
    a: "global variable",
    b: "local variable",
    c: "Both of the above.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript",
    b: "scripting",
    c: "script",
    d: "js",
    correct: "c",
  },
];

// show quiz questions
var quiz = document.getElementById(quiz);
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");

var currentQuiz = 0;
var score = 0;

function loadQuiz() {
  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// start quiz
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
var result = document.getElementById("result");

// css display:none;

function startQuiz() {
  loadQuiz();
  // Timer
}

// answer quetions
function nextQuestion() {
  //   and result from the last one to check if the answer is correct
  if (quizData[currentQuiz].correct === this.id) {
    result.textContent = "Correct!";
    score += 10;
  } else {
    result.textContent = "Wrong!";
    // timer -=5
  }
  //show the next question
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showScore();
  }
}

a_text.addEventListener("click", nextQuestion);
b_text.addEventListener("click", nextQuestion);
c_text.addEventListener("click", nextQuestion);
d_text.addEventListener("click", nextQuestion);

function showScore() {
    // css display
}

// high score: localStorage
// goback: a TAG T
// CLEAR HIGH : DELETE LOCALSTORAGE
//view high score: 