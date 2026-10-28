
const leaderboardForm = document.querySelector("#leaderboard-form");
const leaderboardStatus = document.querySelector("#leaderboard-status");
const resetLeaderboardButton = document.querySelector("#reset-leaderboard");
const quizIds = ["quiz1", "quiz2"];
// Functie om de scores op te halen uit localStorage voor een specifieke quiz
function getScores(quizId) {
    let scores = [];
    const savedCount = localStorage.getItem(quizId + "LeaderboardCount");
    // Als er een opgeslagen scorecount is, gebruik deze om de scores op te halen, anders gebruik een standaardwaarde van 5
    if (savedCount !== null) {
        let plek = 0;
        while (plek < Number(savedCount)) {
            const name = localStorage.getItem(quizId + "LeaderboardName" + plek);
            const scoreText = localStorage.getItem(quizId + "LeaderboardScore" + plek);
            const score = Number(scoreText);
            // Controleer of de naam en score geldig zijn voordat je ze toevoegt aan de scores-array
            if (name && scoreText !== null && Number.isFinite(score) && score >= 0) {
                scores.push({ name: name, score: score });
            }
            plek++;
        }
        // Als er geen opgeslagen scorecount is, gebruik een standaardwaarde van 5 om de scores op te halen
    } else {
        let plek = 0;
        while (plek < 5) {
            const name = localStorage.getItem(quizId + "LeaderboardName" + plek);
            const scoreText = localStorage.getItem(quizId + "LeaderboardScore" + plek);
            const score = Number(scoreText);
            // Controleer of de naam en score geldig zijn voordat je ze toevoegt aan de scores-array
            if (name && scoreText !== null && Number.isFinite(score) && score >= 0) {
                scores.push({ name: name, score: score });
            }
            plek++;
        }
    }
// Sorteer de scores in aflopende volgorde op basis van de score voordat je ze retourneert
    scores.sort(function(a, b) {
        return b.score - a.score;
    });
    return scores;
}

// Functie om de scores weer te geven op de leaderboard-pagina
function showScores() {
    quizIds.forEach(function(quizId) {
        const leaderboardList = document.querySelector("#" + quizId + "-leaderboard-list");
        if (!leaderboardList) {
            return;
        }
        const playerRank = document.querySelector("#" + quizId + "-player-rank");
        // Maak de lijst leeg voordat je de scores weergeeft
        leaderboardList.textContent = "";
        const scores = getScores(quizId);
        // Voeg de top 5 scores toe aan de leaderboard-lijst
        scores.slice(0, 5).forEach(function(result, index) {
            const entry = document.createElement("li");
            entry.value = index + 1;
            entry.textContent = result.name + " " + result.score + "/5";
            leaderboardList.appendChild(entry);
        });

        // Als er geen scores zijn, geef een bericht weer dat er nog geen scores zijn
        if (leaderboardList.children.length === 0) {
            const emptyMessage = document.createElement("li");
            emptyMessage.textContent = "No scores yet.";
            leaderboardList.appendChild(emptyMessage);
        }
        // Toon de rang van de speler als deze aanwezig is in de leaderboard
        if (playerRank) {
            const latestRank = Number(localStorage.getItem(quizId + "LatestLeaderboardRank"));
            const latestName = localStorage.getItem(quizId + "LatestLeaderboardName");
            const latestScore = localStorage.getItem(quizId + "LatestLeaderboardScore");
            playerRank.hidden = true;
            // Als de speler een rang heeft en deze hoger is dan 5, toon de rang en score van de speler
            if (latestName && latestScore !== null && latestRank > 5) {
                playerRank.textContent = "Your place: " + latestRank + ". " +
                    latestName + " " + latestScore + "/5.";
                playerRank.hidden = false;
            }
        }
    });
}
// Voeg een event listener toe aan de reset-knop om de leaderboard te resetten
if (resetLeaderboardButton) {
    resetLeaderboardButton.addEventListener("click", function() {
        quizIds.forEach(function(quizId) {
            // je begint op plek 0 en verwijdert alle opgeslagen scores totdat je de opgeslagen scorecount hebt bereikt
            let plek = 0;
            const savedCount = Number(localStorage.getItem(quizId + "LeaderboardCount")) || 5;
            while (plek < savedCount) {
                localStorage.removeItem(quizId + "LeaderboardName" + plek);
                localStorage.removeItem(quizId + "LeaderboardScore" + plek);
                plek++;
            }
            // Verwijder de tijdelijke scoregegevens uit localStorage
            localStorage.removeItem(quizId + "LeaderboardCount");
            localStorage.removeItem(quizId + "LatestLeaderboardRank");
            localStorage.removeItem(quizId + "LatestLeaderboardName");
            localStorage.removeItem(quizId + "LatestLeaderboardScore");
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
        // Haal alle bestaande scores op, voeg de nieuwe score toe en sorteer ze.
        const scores = getScores(quizId);
        // Voeg de nieuwe score toe aan de lijst van scores
        const newScore = { name: naam, score: score };
        scores.push(newScore);
        scores.sort(function(a, b) {
            return b.score - a.score;
        });
        // Sla de bijgewerkte scores op in localStorage, inclusief de rang en score van de speler
        localStorage.setItem(quizId + "LeaderboardCount", scores.length);
        localStorage.setItem(quizId + "LatestLeaderboardRank", scores.indexOf(newScore) + 1);
        localStorage.setItem(quizId + "LatestLeaderboardName", naam);
        localStorage.setItem(quizId + "LatestLeaderboardScore", score);
        let opslagPlek = 0;
        // slaat de scores op in localStorage totdat alle scores zijn opgeslagen
        while (opslagPlek < scores.length) {
            localStorage.setItem(quizId + "LeaderboardName" + opslagPlek, scores[opslagPlek].name);
            localStorage.setItem(quizId + "LeaderboardScore" + opslagPlek, scores[opslagPlek].score);
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
