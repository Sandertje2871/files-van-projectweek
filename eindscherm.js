const finalScoreDisplay = document.querySelector("#final-score");
finalScoreDisplay.textContent = localStorage.getItem("finalScore") ?? "0";