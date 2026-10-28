const questions = Array.from(document.querySelectorAll(".question"));
// Array met de correcte antwoorden voor elke vraag
const correctAnswers = [
    "Spanish",
    "Polish",
    "Arabic",
    "Urdu",
    "Lithuanian",
    "Chinese",
    "Turkish",
    "German",
    "French",
    "Swahili",
    "Thai",
    "Bengali",
    "Japanese",
    "Italian",
    "Russian",
    "Czech",
    "Portuguese",
    "Indonesian",
    "Swedish",
    "Filipino"
];
// Schud de volgorde van de antworoden willekeurig zijn
const questionOrder = questions.map(function(question, index) {
    return { question: question, correctAnswer: correctAnswers[index] };
});
// Zorgt dat de volgorde van de vragen willekeurig is
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
    localStorage.setItem("scoreForLeaderboardQuiz", "quiz2");
    window.location.href = "eindscherm.html";
}
// timer instellen en zorgen dat het na 240 seconden het spel beëindigt
const timerDisplay = document.querySelector("#timer");
const deadline = Date.now() + 240 * 1000;
const countdown = setInterval(function() {
    const secondsRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timerDisplay.textContent = secondsRemaining;
    // Als de tijd op is, beëindig het spel en ga naar het eindscherm
    if (secondsRemaining === 0) {
        finishGame();
    }
}, 1000);
// Als er vragen zijn, markeer de eerste vraag als actief
if (questionOrder.length > 0) {
    questionOrder[currentQuestion].question.classList.add("active");
}
// Voeg event listeners toe aan de knoppen voor elke vraag
questionOrder.forEach(function(item) {
    const question = item.question;
    const choices = question.querySelector(".choices");
    const buttons = Array.from(question.querySelectorAll("button"));
    // Schud de volgorde van de antwoordknoppen willekeurig
    for (let i = buttons.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[randomIndex]] = [buttons[randomIndex], buttons[i]];
    }
    // Voeg de knoppen toe aan de keuzes-container in de nieuwe willekeurige volgorde
    buttons.forEach(function(button) {
        choices.appendChild(button);
        // Voeg een event listener toe aan elke antwoordknop
        button.addEventListener("click", function() {
            if (question.classList.contains("answered")) {
                return;
            }
            question.classList.add("answered");
            // Controleer of het geselecteerde antwoord correct is en werk de score bij
            const selectedAnswer = button.textContent.trim();
            if (item.correctAnswer === selectedAnswer) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("incorrect");
            }
            // Wacht 500 milliseconden voordat je naar de volgende vraag gaat
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
