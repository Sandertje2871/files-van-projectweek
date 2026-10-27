const questions = document.querySelectorAll(".question");

// goede antwoorden voor de geluidvragen
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
]

// Variabelen voor score, huidige vraag en spelstatus
let score = 0;
let currentQuestion = 0;
let gameFinished = false;

// functie om het spel te beëindigen en door te verwijzen naar het eindscherm
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
// timer instellen en zorgen dat het na 240 seconden het spel beëindigt

const timerDisplay = document.querySelector("#timer");
const deadline = Date.now() + 240 * 1000;
const countdown = setInterval(function() {
    const secondsRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerDisplay.textContent = secondsRemaining;

    if (secondsRemaining === 0) {
        finishGame();
    }
}, 1000);

questions[currentQuestion].classList.add("active");

// Voeg event listeners toe aan elke antwoordknop
questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");
 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const selectedAnswer = button.textContent.trim();

            if (question.classList.contains("answered")) {
                return;
            }
            // Markeer de vraag als beantwoord
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
