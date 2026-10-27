const questions = Array.from(document.querySelectorAll(".question"));
// correcte antwoorden voor de vlagvragen
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
// Variabelen voor score, huidige vraag en spelstatus
const questionOrder = questions.map(function(question, index) {
    return { question: question, correctAnswer: correctAnswers[index] };
});
// Schud de volgorde van de vragen willekeurig
for (let i = questionOrder.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [questionOrder[i], questionOrder[randomIndex]] = [questionOrder[randomIndex], questionOrder[i]];
}

// Variabelen voor score, huidige vraag en spelstatus
let score = 0;
let currentQuestion = 0;
let gameFinished = false;

// functie om het spel te beëindigen en door te verwijzen naar het eindscherm
function finishGame() {
    if (gameFinished) {
        return;
    }
    // Markeer het spel als beëindigd en sla de score op in localStorage
    gameFinished = true;
    clearInterval(countdown);
    localStorage.setItem("finalScore", score);
    localStorage.setItem("scoreForLeaderboard", score);
    localStorage.setItem("scoreForLeaderboardQuiz", "quiz1");
    window.location.href = "eindscherm.html";
}
// timer instellen en zorgen dat het na 120 seconden het spel beëindigt
const timerDisplay = document.querySelector("#timer");
const deadline = Date.now() + 120 * 1000;
const countdown = setInterval(function() {
    const secondsRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerDisplay.textContent = secondsRemaining;
    // Als de tijd op is, beëindig het spel en ga naar het eindscherm
    if (secondsRemaining === 0) {
        finishGame();
    }
}, 1000);

// voegt knop toe voor het afspelen van achtergrondmuziek en regelt de volumeregeling
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.40;

// Voeg event listener toe aan de muziekknop om muziek af te spelen of te pauzeren

musicBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "Music ON";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "Music OFF";
    }
});

// Start het spel door de eerste vraag actief te maken

questionOrder[currentQuestion].question.classList.add("active");
// Voeg event listeners toe aan elke antwoordknop
questionOrder.forEach(function(item) {
    const question = item.question;
    const buttons = Array.from(question.querySelectorAll("button"));
    const choices = question.querySelector(".choices");
    // Schud de volgorde van de antwoordknoppen willekeurig
    for (let i = buttons.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[randomIndex]] = [buttons[randomIndex], buttons[i]];
    }
    // Voeg de antwoordknoppen toe aan de keuzes-container in de nieuwe volgorde
    buttons.forEach(function(button) {
        choices.appendChild(button);
    });
    
// Voeg event listeners toe aan elke antwoordknop
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            if (question.classList.contains("answered"))return;
                question.classList.add("answered"); 

            const selectedAnswer = button.textContent.trim();
 
            if (item.correctAnswer === selectedAnswer) {
                button.classList.add("correct");
                score++;
            }
            else {
                button.classList.add("incorrect")
            }
            // Markeer de vraag als beantwoord
            setTimeout(function() {
            question.classList.remove("active");
            currentQuestion++;
 
            if (currentQuestion < questionOrder.length) {
                questionOrder[currentQuestion].question.classList.add("active");
               
            } else {
                 finishGame();
            }
 
            }, 500);
        });
    });
});
