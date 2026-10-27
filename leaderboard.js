
const leaderboardForm = document.querySelector("#leaderboard-form");
const leaderboardStatus = document.querySelector("#leaderboard-status");
const resetLeaderboardButton = document.querySelector("#reset-leaderboard");
const quizIds = ["quiz1", "quiz2"];
// Functie om de scores weer te geven op de leaderboard-pagina
function showScores() {
    quizIds.forEach(function(quizId) {
        const leaderboardList = document.querySelector("#" + quizId + "-leaderboard-list");
        if (!leaderboardList) {
            return;
        }
        // Maak de lijst leeg voordat je de scores weergeeft
        leaderboardList.textContent = "";
        let plek = 0;
        // Loop door de top 5 scores en voeg ze toe aan de lijst
        while (plek < 5) {
            const naam = localStorage.getItem(quizId + "LeaderboardName" + plek);
            const score = localStorage.getItem(quizId + "LeaderboardScore" + plek);
            // Controleer of de naam en score geldig zijn voordat je ze toevoegt aan de lijst
            if (naam && score !== null) {
                const entry = document.createElement("li");
                entry.textContent = naam + " - " + score + "/20";
                leaderboardList.appendChild(entry);
            }
            
            plek++;
        }
        // Als er geen scores zijn, geef een bericht weer dat er nog geen scores zijn
        if (leaderboardList.children.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "No scores yet.";
            leaderboardList.appendChild(emptyMessage);
        }
    });
}
// Voeg een event listener toe aan de reset-knop om de leaderboard te resetten
if (resetLeaderboardButton) {
    resetLeaderboardButton.addEventListener("click", function() {
        quizIds.forEach(function(quizId) {
            let plek = 0;
            while (plek < 5) {
                localStorage.removeItem(quizId + "LeaderboardName" + plek);
                localStorage.removeItem(quizId + "LeaderboardScore" + plek);
                plek++;
            }
        });

        showScores();
    });
}
// Controleer of er een score is opgeslagen in localStorage en toon het leaderboardformulier indien aanwezig
if (leaderboardForm) {
    const scoreVoorLeaderboard = localStorage.getItem("scoreForLeaderboard");

    if (scoreVoorLeaderboard !== null && Number(scoreVoorLeaderboard) >= 0) {
        leaderboardForm.hidden = false;
    }
// Voeg een event listener toe aan het leaderboardformulier om de score op te slaan wanneer het formulier wordt ingediend
    leaderboardForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Haal de naam, score en quizId op uit localStorage en controleer of ze geldig zijn
        const naamInput = document.querySelector("#player-name");
        const naam = naamInput.value.trim();
        const scoreTekst = localStorage.getItem("scoreForLeaderboard");
        // Controleer of de naam, score en quizId geldig zijn voordat je de score opslaat
        const score = Number(scoreTekst);
        const quizId = localStorage.getItem("scoreForLeaderboardQuiz");
        if (!naam || scoreTekst === null || !Number.isFinite(score) || score < 0 || !quizIds.includes(quizId)) {
            leaderboardStatus.textContent = "Enter your name to save your score.";
            return;
        }
        // Haal de bestaande scores op uit localStorage en voeg de nieuwe score toe, sorteer ze en sla de top 5 scores op
        const scores = [];
        let aantalScores = 0;
        while (aantalScores < 5) {
            const oudeNaam = localStorage.getItem(quizId + "LeaderboardName" + aantalScores);
            const oudeScoreTekst = localStorage.getItem(quizId + "LeaderboardScore" + aantalScores);
            const oudeScore = Number(oudeScoreTekst);
            // Controleer of de oude naam en score geldig zijn voordat je ze toevoegt aan de lijst van scores
            if (oudeNaam && oudeScoreTekst !== null && Number.isFinite(oudeScore) && oudeScore >= 0) {
                scores.push({ name: oudeNaam, score: oudeScore });
            }

            aantalScores++;
        }
        // Voeg de nieuwe score toe aan de lijst van scores
        scores.push({ name: naam, score: score });
        scores.sort(function(a, b) {
            return b.score - a.score;
        });
        // Beperk de lijst tot de top 5 scores
        let opslagPlek = 0;
        while (opslagPlek < 5) {
            if (opslagPlek < scores.length) {
                localStorage.setItem(quizId + "LeaderboardName" + opslagPlek, scores[opslagPlek].name);
                localStorage.setItem(quizId + "LeaderboardScore" + opslagPlek, scores[opslagPlek].score);
            } else {
                localStorage.removeItem(quizId + "LeaderboardName" + opslagPlek);
                localStorage.removeItem(quizId + "LeaderboardScore" + opslagPlek);
            }

            opslagPlek++;
        }
        // Verwijder de tijdelijke scoregegevens uit localStorage en verberg het leaderboardformulier, toon een statusbericht en werk de weergegeven scores bij
        localStorage.removeItem("scoreForLeaderboard");
        localStorage.removeItem("scoreForLeaderboardQuiz");
        leaderboardForm.hidden = true;
        leaderboardStatus.textContent = "Your score has been saved.";
        showScores();
    });
}
// Roep de functie showScores aan om de scores weer te geven wanneer de pagina wordt geladen
showScores();
window.addEventListener("storage", showScores);
