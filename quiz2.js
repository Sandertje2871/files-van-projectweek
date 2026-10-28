const questions = Array.from(document.querySelectorAll(".question"));

const correctAnswers = [
    "Spanish",
    "Polish",
    "Arabic",
    "Urdu",
    "Lithuanian",
    "Chinese",
    "Turkish",
    "German",
    "French",
    "Swahili",
    "Thai",
    "Bengali",
    "Japanese",
    "Italian",
    "Russian",
    "Czech",
    "Portuguese",
    "Indonesian",
    "Swedish",
    "Filipino"
];

const questionOrder = questions.map(function(question, index) {
    return { question: question, correctAnswer: correctAnswers[index] };
});
for (let i = questionOrder.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [questionOrder[i], questionOrder[randomIndex]] = [questionOrder[randomIndex], questionOrder[i]];
}

let score = 0;
let currentQuestion = 0;
let gameFinished = false;

function finishGame() {
    if (gameFinished) {
        return;
    }

    gameFinished = true;
    clearInterval(countdown);
    localStorage.setItem("finalScore", score);
    localStorage.setItem("scoreForLeaderboard", score);
    localStorage.setItem("scoreForLeaderboardQuiz", "quiz2");
    window.location.href = "eindscherm.html";
}

const timerDisplay = document.querySelector("#timer");
const deadline = Date.now() + 240 * 1000;
const countdown = setInterval(function() {
    const secondsRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerDisplay.textContent = secondsRemaining;

    if (secondsRemaining === 0) {
        finishGame();
    }
}, 1000);

if (questionOrder.length > 0) {
    questionOrder[currentQuestion].question.classList.add("active");
}

questionOrder.forEach(function(item) {
    const question = item.question;
    const choices = question.querySelector(".choices");
    const buttons = Array.from(question.querySelectorAll("button"));

    for (let i = buttons.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[randomIndex]] = [buttons[randomIndex], buttons[i]];
    }

    buttons.forEach(function(button) {
        choices.appendChild(button);

        button.addEventListener("click", function() {
            if (question.classList.contains("answered")) {
                return;
            }
            question.classList.add("answered");

            const selectedAnswer = button.textContent.trim();
            if (item.correctAnswer === selectedAnswer) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("incorrect");
            }

            setTimeout(function() {
                question.classList.remove("active");
                currentQuestion++;

                if (currentQuestion < questionOrder.length) {
                    questionOrder[currentQuestion].question.classList.add("active");
                } else {
                    finishGame();
                }
            }, 500);
        });
    });
});
