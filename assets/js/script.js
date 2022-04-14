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
    question: {
      questionText: "How many 3?",
      answers: {
        1: "A: 345",
        2: "B: 456",
        3: "C: 567",
        4: "D: 678",
      },
      correctAnswer: 1,
      answeredCorrectly: false,
    },
  },
  {
    question: {
      questionText: "How many 4?",
      answers: {
        1: "A: 321",
        2: "B: 432",
        3: "C: 543",
        4: "D: 654",
      },
      correctAnswer: 2,
      answeredCorrectly: false,
    },
  },
  {
    question: {
      questionText: "How many 5?",
      answers: {
        1: "A: 3",
        2: "B: 4",
        3: "C: 5",
        4: "D: 6",
      },
      correctAnswer: 3,
      answeredCorrectly: false,
    },
  },
  {
    question: {
      questionText: "How many 6?",
      answers: {
        1: "A: 3",
        2: "B: 4",
        3: "C: 5",
        4: "D: 6",
      },
      correctAnswer: 4,
      answeredCorrectly: false,
    },
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

  for (i = 0; i < dataArray.length; i++) {
    var questionText = document.createElement("h1");
    questionText.setAttribute("id", "questionTitle");
    questionText.setAttribute("class", "my-4 is-size-3");
    questionText.textContent = dataArray[i].question.questionText;

    var answersEl = document.createElement("div");
    answersEl.setAttribute("id", "answers");
    answersEl.setAttribute("class", "my-4");

    var ans1 = document.createElement("button");
    ans1.setAttribute("id", "ans1");
    ans1.setAttribute(
      "class",
      "button is-medium is-responsive is-info is-light"
    );
    ans1.textContent = dataArray[i].question.answers[1];
    console.log(ans1.textContent);
    answersEl.appendChild(ans1);

    var ans2 = document.createElement("button");
    ans2.setAttribute("id", "ans2");
    ans2.setAttribute(
      "class",
      "button is-medium is-responsive is-info is-light"
    );
    ans2.textContent = dataArray[i].question.answers[2];
    answersEl.appendChild(ans2);

    var ans3 = document.createElement("button");
    ans3.setAttribute("id", "ans3");
    ans3.setAttribute(
      "class",
      "button is-medium is-responsive is-info is-light"
    );
    ans3.textContent = dataArray[i].question.answers[3];
    answersEl.appendChild(ans3);

    var ans4 = document.createElement("button");
    ans4.setAttribute("id", "ans4");
    ans4.setAttribute(
      "class",
      "button is-medium is-responsive is-info is-light"
    );
    ans4.textContent = dataArray[i].question.answers[4];
    answersEl.appendChild(ans4);

    questionsEl.appendChild(questionText);
    questionsEl.appendChild(answersEl);
    body.appendChild(questionsEl);
  }

  // After answer, start timer and display next question

  // Display quiz finished, score, add input for initials + Save Score button
}
