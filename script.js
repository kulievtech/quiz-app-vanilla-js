const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which mountain range is the longest in the world?",
        answers: [
            { text: "Himalayas", correct: false },
            { text: "Andes", correct: true },
            { text: "Rocky Mountains", correct: false },
            { text: "Alps", correct: false }
        ]
    },
    {
        question: "In which continent is the Sahara Desert located?",
        answers: [
            { text: "South America", correct: false },
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false }
        ]
    },
    {
        question: "What is the largest lake in Africa?",
        answers: [
            { text: "Lake Tanganyika", correct: false },
            { text: "Lake Victoria", correct: true },
            { text: "Lake Malawi", correct: false },
            { text: "Lake Chad", correct: false }
        ]
    },
    {
        question: "Which river flows through the Grand Canyon?",
        answers: [
            { text: "Mississippi River", correct: false },
            { text: "Colorado River", correct: true },
            { text: "Columbia River", correct: false },
            { text: "Amazon River", correct: false }
        ]
    },
    {
        question: "In which European country is the city of Prague located?",
        answers: [
            { text: "Germany", correct: false },
            { text: "Austria", correct: false },
            { text: "Czech Republic", correct: true },
            { text: "Hungary", correct: false }
        ]
    },
    {
        question: "What is the highest mountain in North America?",
        answers: [
            { text: "Mount Rainier", correct: false },
            { text: "Denali (Mount McKinley)", correct: true },
            { text: "Mount St. Elias", correct: false },
            { text: "Mount Logan", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest in terms of surface area?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question:
            "Which two countries share the longest international border in the world?",
        answers: [
            { text: "Russia and China", correct: false },
            { text: "Canada and the United States", correct: true },
            { text: "India and Pakistan", correct: false },
            { text: "Brazil and Argentina", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which African country is known as the 'Rainbow Nation'?",
        answers: [
            { text: "Nigeria", correct: false },
            { text: "South Africa", correct: true },
            { text: "Kenya", correct: false },
            { text: "Egypt", correct: false }
        ]
    },
    {
        question: "In which country would you find the ancient city of Petra?",
        answers: [
            { text: "Greece", correct: false },
            { text: "Italy", correct: false },
            { text: "Jordan", correct: true },
            { text: "Turkey", correct: false }
        ]
    },
    {
        question: "What is the largest island in the world?",
        answers: [
            { text: "Greenland", correct: true },
            { text: "Australia", correct: false },
            { text: "Borneo", correct: false },
            { text: "Madagascar", correct: false }
        ]
    },
    {
        question:
            "Which European country is known as the 'Land of a Thousand Lakes'?",
        answers: [
            { text: "Norway", correct: false },
            { text: "Finland", correct: true },
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Nauru", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
