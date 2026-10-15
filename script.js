const questions = document.querySelectorAll(".question");

const correctAnswers = [
"Luxembourg",
"South Africa",
"Spain",
"Kenya",
"Yemen",
"Bhutan",
"Lesotho",
"Norway",
"Brunei",
"Sri Lanka",
"Guatemala",
"Venezuela",
"Serbia",
"Mozambique",
"Kyrgyzstan",
"Palau",
"Ivory Coast",
"San Marino",
"Andorra",
"Cape Verde"
];

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

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.40;

musicBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "Music ON";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "Music OFF";
    }
});


questions[currentQuestion].classList.add("active");

questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");
 
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
 
            const selectedAnswer = button.textContent.trim();
 
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
