const choices = document.querySelectorAll(".choices button");
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

const scoreDisplay = document.querySelector("#score");

questions[currentQuestion].classList.add("active");

questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            const selectedAnswer = button.textContent.trim();

            if (correctAnswers[index] === selectedAnswer) {
                button.classList.add("correct");
                score++;
                scoreDisplay.textContent = score;
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
                 window.location.href="eindscherm.html";
            }

            }, 700);
        });
    });
});
