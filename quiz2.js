const questions = document.querySelectorAll(".question");

const correctAnswers = [
"Arabic",
"Bengali",
"Chinese",
"Czech",
"French",
"German",
"Indonesian",
"Italian",
"Japanese",
"Lithuanian",
"Polish",
"Portugese",
"Russian",
"Somali",
"Spanish",
"Swahili",
"Swedish",
"Thai",
"Turkish",
"Urdu"
]

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
    window.location.href = "eindscherm.html";
}

const timerDisplay = document.querySelector("#timer");
const deadline = Date.now() + 120 * 1000;
const countdown = setInterval(function() {
    const secondsRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerDisplay.textContent = secondsRemaining;

    if (secondsRemaining === 0) {
        finishGame();
    }
}, 1000);

questions[currentQuestion].classList.add("active");

questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");
 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const selectedAnswer = button.textContent.trim();

            if (question.classList.contains("answered")) {
                return;
            }

            question.classList.add("answered");

            if (correctAnswers[index] === selectedAnswer) {
                button.classList.add("correct");
                score++;
            }
            else {
                button.classList.add("incorrect")
            }
 
            setTimeout(function() {
                question.classList.remove("active");
                currentQuestion++;
 
                if (currentQuestion < questions.length) {
                    questions[currentQuestion].classList.add("active");
               
                } else {
                    finishGame();
                }
 
            }, 100);
        });
    });
});
