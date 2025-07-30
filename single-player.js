const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Leo Tolstoy", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "100°C", correct: true },
      { text: "0°C", correct: false },
      { text: "50°C", correct: false },
      { text: "200°C", correct: false }
    ]
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Lion", correct: true },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Earth", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Go", correct: false }
    ]
  },
  {
    question: "In which continent is the Sahara Desert located?",
    answers: [
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "Australia", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Carbon Dioxide", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Diamond", correct: true },
      { text: "Iron", correct: false },
      { text: "Gold", correct: false },
      { text: "Silver", correct: false }
    ]
  }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreText = document.getElementById('score-text');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = 'Next';
  document.getElementById('quiz').classList.remove('hidden');
  resultContainer.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hidden');
  answerButtons.innerHTML = '';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  if (correct) score++;

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  });

  nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('quiz').classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
}

startQuiz();
