    const questions = document.querySelectorAll(".question");
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

    questions[currentQuestion].classList.add("active");

    questions.forEach(function(question, index) {
        const buttons = question.querySelectorAll("button");
        
    // Voeg event listeners toe aan elke antwoordknop
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                if (question.classList.contains("answered"))return;
                    question.classList.add("answered");
    
                const selectedAnswer = button.textContent.trim();
    
                if (correctAnswers[index] === selectedAnswer) {
                    button.classList.add("correct");
                    score++;
                    button.disabled = true;
                }
                else {
                    button.classList.add("incorrect")
                    button.disabled = true;
                }
                // Markeer de vraag als beantwoord
                setTimeout(function() {
                question.classList.remove("active");
                currentQuestion++;
    
                if (currentQuestion < questions.length) {
                    questions[currentQuestion].classList.add("active");
                
                } else {
                    finishGame();
                }
    
                }, 500);
            });
        });
    });
