<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const choices = document.querySelectorAll(".choices button");
const questions = document.querySelectorAll(".question");
 
=======
>>>>>>> Stashed changes
const questions = document.querySelectorAll(".question");

>>>>>>> 5edb10cb7da105960243e106f94c87f396abe217
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
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
 
const scoreDisplay = document.querySelector("#score");
 
questions[currentQuestion].classList.add("active");
 
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
               
=======
>>>>>>> Stashed changes

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
                
<<<<<<< Updated upstream
=======
>>>>>>> 5edb10cb7da105960243e106f94c87f396abe217
>>>>>>> Stashed changes
            } else {
                 localStorage.setItem("finalScore", score);
                 window.location.href="eindscherm.html";
            }
<<<<<<< Updated upstream

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








=======
<<<<<<< HEAD
 
        });
    });
});
 
 
choices.forEach(function(button) {
button.addEventListener("click", function() {
const selectedAnswer = button.textContent.trim();
 
    if (button.classList.contains("correct") || button.classList.contains("incorrect")) {
        return;
    }
 
    if (correctAnswers.includes(selectedAnswer)) {
        button.classList.add("correct");
 
        score+1;
        scoreDisplay.textContent = score;
    } else {
        button.classList.add("incorrect");
    }
    });
});
 
=======

        });
    });
});
>>>>>>> 5edb10cb7da105960243e106f94c87f396abe217
>>>>>>> Stashed changes
