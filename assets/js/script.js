// Decalring DOM elements
var viewHighScoreLink = document.querySelector("#viewScores");
var clearHighScoreLink = document.querySelector("#clearScores");
var startBtn = document.querySelector("#startBtn");
var mainEl = document.querySelector("#main")
var mainTitle = document.querySelector("#mainTitle");
var mainText = document.querySelector("#mainText");
var timerVal = document.querySelector("timerValue")


var questionArray = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9","Question 10",];


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
	
	// for (var i = 0; i < questionArray.length; i++){
	mainTitle.textContent = questionArray[0]
	mainText.textContent = "Answer 1";
	// }
	
	
}


// Event listners
viewHighScoreLink.addEventListener("click", viewScores);

clearHighScoreLink.addEventListener("click", clearScores);

startBtn.addEventListener("click", startQuiz);