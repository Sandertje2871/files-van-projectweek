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

questions[currentQuestion].classList.add("active");

questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            const selectedAnswer = button.textContent.trim();

            if (correctAnswers[index] === selectedAnswer) {
                score++;
            }

            question.classList.remove("active");

            currentQuestion++;

            if (currentQuestion < questions.length) {
                questions[currentQuestion].classList.add("active");
                
            } else {
                 localStorage.setItem("finalScore", score);
                 window.location.href="eindscherm.html";
            }

        });
    });
});

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








