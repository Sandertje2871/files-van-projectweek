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

choices.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedAnswer = button.textContent.trim();

        if (correctAnswers.includes(selectedAnswer)) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });
});