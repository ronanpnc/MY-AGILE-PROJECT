// DOMS ELEMENTS  ---------------------------------------------------------
const dom_start = document.getElementById("start");
const dom_quiz = document.getElementById("quiz");
const dom_question = document.getElementById("question");
const dom_choiceA = document.getElementById("A");
const dom_choiceB = document.getElementById("B");
const dom_choiceC = document.getElementById("C");
const dom_score = document.getElementById("score");

// DATA  ---------------------------------------------------------
const questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Correct",
    choiceB: "Wrong",
    choiceC: "Wrong",
    correct: "A",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    correct: "B",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

// render a question
function renderQuestion() {
  let question = questions[runningQuestionIndex];

  dom_question.textContent = question.title;
  dom_choiceA.textContent = question.choiceA;
  dom_choiceB.textContent = question.choiceB;
  dom_choiceC.textContent = question.choiceC;
}

// Start quiz
dom_start.addEventListener("click", (e) => {
  // Update the question view
  renderQuestion();

  // Dispaly the question view, and hide the start
  hide(start);
  show(dom_quiz);
});

// checkAnwer
function checkAnswer(answer) {
  if (answer == questions[runningQuestionIndex].correct) {
    score++; // Increase the score
  }

  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    renderQuestion(); // Show the next question
  } else {
    renderSCore(); // end the quiz and show the score
  }
}

// score render
function renderSCore() {
  hide(dom_quiz);
  show(dom_score);

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  comment = "AMAZING !";
  image = "img/100.png";

  if (scorePerCent <= 20) {
    comment = "HUMM !";
    image = "img/20.png";
  } else if (scorePerCent <= 40) {
    comment = "YOU CAN IMPROVE !";
    image = "img/40.png";
  } else if (scorePerCent <= 60) {
    comment = "NOT BAD !";
    image = "img/60.png";
  } else if (scorePerCent <= 80) {
    comment = "GOOD !";
    image = "img/80.png";
  }
  dom_score.innerHTML = "<img src=" + image + ">";
  dom_score.innerHTML += "<p>" + comment + " : " + scorePerCent + " %</p>";
}
