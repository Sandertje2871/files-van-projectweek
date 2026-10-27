const finalScoreDisplay = document.querySelector("#final-score");
finalScoreDisplay.textContent = localStorage.getItem("finalScore") + "/20";
confetti({
    particleCount: 500,
    spread: 180,
});
