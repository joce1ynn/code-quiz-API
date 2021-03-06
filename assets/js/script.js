// -------------------1. start quiz------------------
// 1.1 declare variables
var startBox = document.getElementById("start-box");
var startButton = document.getElementById("start");
var resultEl = document.getElementById("result");
var timerEl = document.getElementById("timer");
var timeLeft = 60;

// 1.2 start the quiz and trigger the timer
function startQuiz() {
  loadQuiz();
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = ": " + timeLeft + "s";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      showScore();
    }
  }, 1000);
}

// 1.3 Add an event listener to the start button
startButton.addEventListener("click", startQuiz);


// ---------------------2. quiz content-----------------
// 2.1 creat quiz questions
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
    a: "<javascript>",
    b: "<scripting>",
    c: "<script>",
    d: "<js>",
    correct: "c",
  },
];

// 2.2 show quiz questions
var quizBox = document.getElementById("quiz-box");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");

function loadQuiz() {
  startBox.style.display = "none";
  quizBox.style.display = "block";
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}


// --------------------3. answer quetions-------------------
// 3.1 declare variables
var currentQuiz = 0;
var score = 0;

// 3.2 show the next question after answering the last one
function nextQuestion() {
  // get results from the last one
  if (quizData[currentQuiz].correct === this.id) {
    resultEl.textContent = "Correct!";
    score += 20;
  } else {
    resultEl.textContent = "Wrong!";
    timeLeft -= 20;
  }

  // show the next question
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showScore();
  }
}

// 3.3 Add an event listener to the start button
a_text.addEventListener("click", nextQuestion);
b_text.addEventListener("click", nextQuestion);
c_text.addEventListener("click", nextQuestion);
d_text.addEventListener("click", nextQuestion);


// -----------------------4. show scores----------------
//4.1 declare variables
var scoreBox = document.getElementById("score-box");
var scoreEl = document.getElementById("score");
var initialEl = document.getElementById("initials");
var submitEl = document.getElementById("submit");

// 4.2 showing score page
function showScore() {
  quizBox.style.display = "none";
  scoreBox.style.display = "block";
  scoreEl.textContent = score;
}

// 4.3 submit initials
submitEl.addEventListener("click", function submitInitials() {

  // initials must be submitted
  if (initialEl.value === "") {
    window.alert("Initials need to be submitted!");
  } else {

    //save initials and scores
    var highScore = {
      initial: initialEl.value,
      score: score,
    };

    var highScoreData = JSON.parse(localStorage.getItem("highScoreData")) || [];
    highScoreData.push(highScore);

    localStorage.setItem("highScoreData", JSON.stringify(highScoreData));

    //show high score box;
    showHighScores();
  }
});


// ---------------------5. high scores------------------------
// 5.1 declare variables
var viewScorePage = document.getElementById("view-high-score");
var highScoreBox = document.getElementById("high-score");
var highScoreEL = document.getElementById("list-scores");
var backEl = document.getElementById("back");
var clearEl = document.getElementById("clear");

//5.2 show high scores
function showHighScores() {
  startBox.style.display = "none";
  quizBox.style.display = "none";
  scoreBox.style.display = "none";
  highScoreBox.style.display = "block";
  resultEl.style.display = "none";

  //load saved scores
  highScoreEL.innerHTML = "";

  var savedScores = JSON.parse(localStorage.getItem("highScoreData")) || [];

  for (var i = 0; i < savedScores.length; i++) {
    var highScoreList = document.createElement("li");
    highScoreList.textContent =
      savedScores[i].initial + " - " + savedScores[i].score;

    highScoreEL.appendChild(highScoreList);
  }
}

//5.3 view high scores page
viewScorePage.addEventListener("click", showHighScores);

//5.4 go back to start page
backEl.addEventListener("click", function () {
  location.reload();
});

//5.5 clear high scores
clearEl.addEventListener("click", function () {
  localStorage.clear();
  showHighScores();
});
