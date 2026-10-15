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

questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            const selectedAnswer = button.textContent.trim();

            if (correctAnswers[index] === selectedAnswer) {
                score++;
                scoreDisplay.textContent = score;
            }

            question.classList.remove("active");

            currentQuestion++;

            if (currentQuestion < questions.length) {
                questions[currentQuestion].classList.add("active");
                
            } else {
                 window.location.href="eindscherm.html";
            }

        });
    });
});

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
