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

// 4 answers button click listener, then pause timer and show highlight correct/incorrect for 3-4 second delay

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
  function quesitonItem(i) {
    return dataArray[i].questionText;
  }
  function answerItem(i, j) {
    return dataArray[i].answers[j];
  }

  var q1Title = document.createElement("h1");
  q1Title.setAttribute("id", "questionTitle");
  q1Title.textContent = quesitonItem(1);

  var answerEl1 = document.createElement("button");
  answerEl1.setAttribute("id", "answer1");
  answerEl1.setAttribute(
    "class",
    "button is-medium is-responsive is-info is-light"
  );
  answerEl1.textContent = answerItem(1, 1);

  questionsEl.appendChild(q1Title);
  questionsEl.appendChild(answerEl1);
  body.appendChild(questionsEl);
  // answerEl1.textContent = dataArray[question[1]].answers[1];

  // for (var i = 0; dataArray.length; i++) {
  //   console.log(dataArray[i]);
  // }
  //   console.log(dataArray[i].answers[1]);
  //   console.log(dataArray[i].answers[2]);
  //   console.log(dataArray[i].answers[3]);
  //   console.log(dataArray[i].answers[4]);
  //   dataArray[i].answered = true;
  //   // for (var y = 1; y - 1 < dataArray[i].answers[y]; i++) {
  //   //   console.log(dataArray[i].answers(y));
  //   // }
  //   // mainTitle.textContent = dataArray[0].answers[0];
  //   // mainText.textContent = dataArray.question.answers[0];
  // }
  // After answer, start timer and display next question

  // Display quiz finished, score, add input for initials + Save Score button
}
