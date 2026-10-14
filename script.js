const choices = document.querySelectorAll(".choices button");

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
const scoreDisplay = document.querySelector("#score");

choices.forEach(function(button) {
button.addEventListener("click", function() {
const selectedAnswer = button.textContent.trim();

    if (
        button.classList.contains("correct") ||
        button.classList.contains("incorrect")
    ) {
        return;
    }

    if (correctAnswers.includes(selectedAnswer)) {
        button.classList.add("correct");

        score++;
        scoreDisplay.textContent = score;
    } else {
        button.classList.add("incorrect");
    }
    });
});