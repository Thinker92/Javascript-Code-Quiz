// Decalring DOM elements
var body = document.querySelector("body");
var viewHighScoreLink = document.querySelector("#viewScores");
var clearHighScoreLink = document.querySelector("#clearScores");
var startBtn = document.querySelector("#startBtn");
var mainEl = document.querySelector("#main");
var mainTitle = document.querySelector("#mainTitle");
var mainText = document.querySelector("#mainText");
var timerEL = document.querySelector("#timerValue");
var timer = 90;

// Declaring buttons

viewHighScoreLink.addEventListener("click", viewScores);

clearHighScoreLink.addEventListener("click", clearScores);

startBtn.addEventListener("click", startQuiz);
var questionIndex = 0;
function reply_click(clicked_id) {
  console.log(clicked_id);
}

var dataArray = [
  {
    question: "How many 345?",
    answers: ["A: 345", "B: 456", "C: 567", "D: 678"],
    correctAnswer: 1,
  },
  {
    question: "How many 345?",
    answers: ["A: 345", "B: 456", "C: 567", "D: 678"],
    correctAnswer: 1,
  },
  {
    question: "How many 345?",
    answers: ["A: 345", "B: 456", "C: 567", "D: 678"],
    correctAnswer: 1,
  },
  {
    question: "How many 345?",
    answers: ["A: 345", "B: 456", "C: 567", "D: 678"],
    correctAnswer: 1,
  },
];

// Display High score list, clear scores button, start quiz button
function viewScores() {
  event.preventDefault();
  alert("Clicked!");
}

function clearScores() {
  event.preventDefault();
  alert("Clicked!");
}

// Start function: clears main div and displays question and 4 answers from array, starts timer countdown
function startQuiz() {
  event.preventDefault();
  mainEl.remove();
  timerEL.textContent = timer;

  var questionsEl = document.createElement("div");
  questionsEl.setAttribute("id", "questions");
  questionsEl.setAttribute(
    "class",
    "is-flex is-align-items-center is-flex-direction-column my-6 px-6"
  );
  var questionText = document.createElement("h1");
  questionText.setAttribute("id", "questionTitle");
  questionText.setAttribute("class", "my-4 is-size-3");
  questionText.textContent = dataArray[questionIndex].question;

  var answersEl = document.createElement("div");
  answersEl.setAttribute("id", "answers");
  answersEl.setAttribute("class", "my-4 is-flex is-flex-direction-column");


  for (var i = 0; i < dataArray[questionIndex].answers.length; i++) {
  var ans = document.createElement("button");
  ans.setAttribute("id", `${i}`);
  ans.setAttribute("class", "button is-medium is-responsive is-info is-light ");
  ans.setAttribute("onClick", "reply_click(this.id)")
  ans.textContent = dataArray[questionIndex].answers[i];
  console.log(ans.textContent);
  answersEl.appendChild(ans);
  }

  // var ans2 = document.createElement("button");
  // ans2.setAttribute("id", "ans2");
  // ans2.setAttribute("class", "button is-medium is-responsive is-info is-light");
  // ans2.textContent = dataArray[i].question.answers[2];
  // answersEl.appendChild(ans2);

  // var ans3 = document.createElement("button");
  // ans3.setAttribute("id", "ans3");
  // ans3.setAttribute("class", "button is-medium is-responsive is-info is-light");
  // ans3.textContent = dataArray[i].question.answers[3];
  // answersEl.appendChild(ans3);

  // var ans4 = document.createElement("button");
  // ans4.setAttribute("id", "ans4");
  // ans4.setAttribute("class", "button is-medium is-responsive is-info is-light");
  // ans4.textContent = dataArray[i].question.answers[4];
  // answersEl.appendChild(ans4);

  questionsEl.appendChild(questionText);
  questionsEl.appendChild(answersEl);
  body.appendChild(questionsEl);
 
}

// After answer, start timer and display next question

// Display quiz finished, score, add input for initials + Save Score button
