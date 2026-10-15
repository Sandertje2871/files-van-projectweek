const questions = document.querySelectorAll(".question");

const correctAnswers = [
    "Polish",
    "Lithuanian",
    "Swedish",
    "French",
    "Russian",
    "Chinese",
    "Vietnamese",
    "Arabic",
    "German",
    "Italian",
    "Spanish",
    "Afrikaans",
    "Swahili",
    "Surinamese Languages",
    "Urdu",
    "Romanian",
    "Filipino (Tagalog)",
    "Turkish",
    "Greek",
    "Moroccan Arabic (Darija)",
    "Portuguese",
    "Frisian",
    "Irish Gaelic",
    "Hungarian",
    "Bosnian",
    "Hindi",
    "Scots",
    "Thai",
    "Hawaiian",
    "Armenian"
]

let score = 0;
let currentQuestion = 0;
let gameFinished = false;

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
