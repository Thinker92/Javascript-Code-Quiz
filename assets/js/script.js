// Decalring DOM elements
var viewHighScoreLink = document.querySelector("#viewScores");
var clearHighScoreLink = document.querySelector("#clearScores");
var startBtn = document.querySelector("#startBtn");
var mainEl = document.querySelector("#main");
var mainTitle = document.querySelector("#mainTitle");
var mainText = document.querySelector("#mainText");
var timerVal = document.querySelector("timerValue");

var dataArray = [
  {
    question: 1,
    questionText: "How many 3?",
    answers: {
      1: "A: 345",
      2: "B: 456",
      3: "C: 567",
      4: "D: 678",
    },

    correctAnswer: 1,
    answered: false,
  },
  {
    question: 2,
    questionText: "How many 4?",
    answers: {
      1: "A: 321",
      2: "B: 432",
      3: "C: 543",
      4: "D: 654",
    },
    correctAnswer: 2,
    answered: false,
  },
  {
    question: 3,
    questionText: "How many 5?",
    answers: {
      1: "A: 3",
      2: "B: 4",
      3: "C: 5",
      4: "D: 6",
    },
    correctAnswer: 3,
    answered: false,
  },
  {
    question: 4,
    questionText: "How many 6?",
    answers: {
      1: "A: 3",
      2: "B: 4",
      3: "C: 5",
      4: "D: 6",
    },
    correctAnswer: 4,
    answered: false,
  },
];

// Start function: clears main div and displays question and 4 answers from array, starts timer countdown

// 4 answers button click listener, then pause timer and show highlight correct/incorrect for 3-4 second delay
// After answer, start timer and display next question

// After final question, display quiz finished, score, add input for initials + Save Score button

// Display High score list, clear scores button, start quiz button
function viewScores() {
  event.preventDefault();
  alert("Clicked!");
}

function clearScores() {
  event.preventDefault();
  alert("Clicked!");
}
function startQuiz() {
  event.preventDefault();

  for (var i = 0, y = 1; i < dataArray.length; i++) {
    // console.log(dataArray[i]); // returns 3
    console.log(dataArray[i].questionText);
    console.log(dataArray[i].answers[y]);
    console.log(dataArray[i].answers[y + 1]);
    console.log(dataArray[i].answers[y + 2]);
    console.log(dataArray[i].answers[y + 3]);
    // for (var y = 1; y - 1 < dataArray[i].answers[y]; i++) {
    //   console.log(dataArray[i].answers(y));
    // }
    // mainTitle.textContent = dataArray[0].answers[0];
    // mainText.textContent = dataArray.question.answers[0];
  }
}

// Event listners
viewHighScoreLink.addEventListener("click", viewScores);

clearHighScoreLink.addEventListener("click", clearScores);

startBtn.addEventListener("click", startQuiz);
