const flag = document.getElementById('flag');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const resultaat = document.getElementById('resultaat');
const checkresultaat = document.getElementById('checkresultaat');
const scoreresultaat = document.getElementById('scoreresultaat');
const tekstvraag = document.getElementById('tekstvraag');
const volgendevraag = document.getElementById('volgendevraag');
const Flags = [
"Luxemburg", "Zuid-Afrika", "Spanje", "Russia", "Kenia", "Jemen", "Bhutan", "Lesotho", "Luxemburg", "Noorwegen",
"Brunei", "Guatemala", "Venezuela", "Servië", "Mozambique", "Kirgizië", "Palau", "Ivoorkust", "San Marino", "Andorra",
"Kaapverdië"
];
 
 
const vragen = [
    { question1: "Luxemburg", options: ["Nederland", "Paraguay", "Luxemburg", "Rusland"], answer: "Luxemburg" },
    { question2: "Zuid-Afrika", options: ["Sudan", "Zuid-Afrika", "Namibië", "South Sudan"], answer: "Zuid-Afrika" },
    { question3: "Spanje", options: ["Portugal", "Colombia", "Ecuador", "Spanje"], answer: "Spanje" },
    { question4: "Russia", options: ["Rusland", "Oekraïne", "Polen", "Belarus"], answer: "Russia" },
    { question5: "Kenia", options: ["Kenia", "Sudan", "Malawi", "South sudan"], answer: "Kenia" },
    { question6: "Jemen", options: ["Iraq", "Jemen", "Syrië", "Egypte"], answer: "Jemen" },
    { question7: "Bhutan", options: ["Mongolië", "Sri Lanka", "Bhutan", "Kazachstan"], answer: "Bhutan" },
    { question8: "Lesotho", options: ["Botswana", "Sierra Leone", "Lesotho", "Somalië"], answer: "Lesotho" },
    { question9: "Luxemburg", options: ["Nederland", "Luxemburg", "Paraguay", "Kroatië"], answer: "Luxemburg" },
    { question10: "Noorwegen", options: ["IJsland", "Faeröer", "Denemarken", "Noorwegen"], answer: "Noorwegen" },
    { question11: "Brunei", options: ["Saoedi-Arabië", "Pakistan", "Brunei", "Bhutan"], answer: "Brunei" },
    { question12: "Guatemala", options: ["El Salvador", "Guatemala", "Honduras", "Nicaragua"], answer: "Guatemala" },
    { question13: "Venezuela", options: ["Colombia", "Ecuador", "Bolivia", "Venezuela"], answer: "Venezuela" },
    { question14: "Servië", options: ["Slowakije", "Servië", "Slovenië", "Kroatië"], answer: "Servië" },
    { question15: "Mozambique", options: ["Kenia", "Zuid-Afrika", "Mozambique", "Zuid-Soedan"], answer: "Mozambique" },
    { question16: "Kirgizië", options: ["Kazachstan", "Kirgizië", "Noord-Macedonië", "Turkije"], answer: "Kirgizië" },
    { question17: "Palau", options: ["Bangladesh", "Japan", "Laos", "Palau"], answer: "Palau" },
    { question18: "Ivoorkust", options: ["Ierland", "Nigeria", "Ivoorkust", "Italië"], answer: "Ivoorkust" },
    { question19: "San Marino", options: ["Nicaragua", "San Marino", "El Salvador", "Honduras"], answer: "San Marino" },
    { question20: "Andorra", options: ["Roemenië", "Moldavië", "Tsjaad", "Andorra"], answer: "Andorra" },
    { question21: "Kaapverdië", options: ["Europese Unie", "Kaapverdië", "Kosovo", "Bosnië en Herzegovina"], answer: "Kaapverdië" },
    
];
 
let currentQuestion = 0;
let score = 0;
let checks = ""

function showQuestion() {
    const vraag = vragen[currentQuestion];
    beantwoord = false;

    tekstvraag.textContent = "Vraag " + (currentQuestion + 1) + " van " + vragen.length + ": van welk land is deze vlag?";
    flag.src = "https://static.vecteezy.com/system/resources/previews/000/394/575/original/vector-illustration-of-luxembourg-flag.jpg";
    flag.alt = "Luxembourg";

for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].textContent = vraag.options[i];
        knoppen[i].disabled = false;
        knoppen[i].className = "";
    }

    checkresultaat.textContent = "";
    scoreresultaat.textContent = "Score: " + score + " / " + currentQuestion;
    volgendevraag.style.display = "none";
}


function checkAnswer(gekozenKnop) {
    if (beantwoord) return;
    beantwoord = true;
}

const vraag = vragen[currentQuestion];

    if (gekozenKnop.textContent === vraag.answer) {
        score++;
        gekozenKnop.className = "goed";
        checkresultaat.textContent = "Goed! ";
    } else {
        gekozenKnop.className = "fout";
        checkresultaat.textContent = "Fout! Het was " + vraag.answer;
        for (const knop of knoppen) {
            if (knop.textContent === vraag.answer) knop.className = "goed";
        }
    }
