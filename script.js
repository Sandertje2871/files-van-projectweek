const flag = document.getElementById('flag');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const result = document.getElementById('result');
const checkresult = document.getElementById('checkresult');
const scoreresult = document.getElementById('scoreresult');
const tekstvraag = document.getElementById('tekstvraag');
const volgendevraag = document.getElementById('volgendevraag');
const Flags = [
"Luxemburg", "Zuid-Afrika", "Spanje", "Russia", "Kenia", "Jemen", "Bhutan", "Lesotho", "Luxemburg", "Noorwegen",
"Brunei", "Guatemala", "Venezuela", "Servië", "Mozambique", "Kirgizië", "Palau", "Ivoorkust", "San Marino", "Andorra",
"Kaapverdië"
];

const knoppen = [choice1, choice2, choice3, choice4];
 
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
let beantwoord = false;
let spelKlaar = false;

let checks = new Array(vragen.length).fill(null);

let gekozen = new Array(vragen.length).fill("");

    tekstvraag.textContent = "Vraag " + (currentQuestion + 1) + " van " + vragen.length + ": van welk land is deze vlag?";
    flag.style.display = "inline";
    flag.src = "https://static.vecteezy.com/system/resources/previews/000/394/575/original/vector-illustration-of-luxembourg-flag.jpg" + vraag.code + ".png";
    flag.alt = "Vlag van vraag " + (currentQuestion + 1);


for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].textContent = vraag.options[i];
        knoppen[i].disabled = false;
        knoppen[i].className = "";
        knoppen[i].style.display = "block";
    }

    checkresult.textContent = "";
    result.innerHTML = "";
    updateScore();
    volgendevraag.style.display = "none";

    function updateScore() {
    let beantwoordevragen = 0;
    for (let i = 0; i < checks.length; i++) {
        if (checks[i] !== null) {
            beantwoordevragen++;
        }
    }
    scoreresult.textContent = "Score: " + score + " / " + beantwoordevragen + "  (totaal " + vragen.length + " vragen)";
}

function checkAnswer(knop) {
    if (beantwoord) {
        return;
    }
    beantwoord = true;
 
    const vraag = vragen[currentQuestion];
    const keuze = knop.textContent;
    gekozen[currentQuestion] = keuze;
 
    if (keuze === vraag.answer) {
        goedAntwoord(knop);
    } else {
        foutAntwoord(knop, vraag);
    }
 
    // Alle knoppen blokkeren
    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].disabled = true;
    }
 
    updateScore();
    toonVolgendeKnop();
}
function goedAntwoord(knop) {
    if (checks[currentQuestion] === null) {
        score = score + 1;
        checks[currentQuestion] = true;
    }
    knop.className = "goed";
    checkresult.textContent = "Goed! +1 punt";
}
function foutAntwoord(knop, vraag) {
    if (checks[currentQuestion] === null) {
        checks[currentQuestion] = false;
    }
    knop.className = "fout";
    checkresult.textContent = "Fout  Het juiste antwoord was: " + vraag.answer;
 for (let i = 0; i < knoppen.length; i++) {
        if (knoppen[i].textContent === vraag.answer) {
            knoppen[i].className = "goed";
        }
    }
}

function toonVolgendeKnop() {
    volgendevraag.style.display = "inline-block";
    if (currentQuestion === vragen.length - 1) {
        volgendevraag.textContent = "Bekijk resultaat";
    } else {
        volgendevraag.textContent = "Volgende vraag";
    }
}

function volgendeVraag() {
    currentQuestion = currentQuestion + 1;
    showQuestion();
}

function showResult() {
    spelKlaar = true;
 
    // Vraag-onderdelen verbergen
    tekstvraag.textContent = "";
    flag.style.display = "none";
    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].style.display = "none";
    }
    checkresult.textContent = "";

    scoreresult.textContent = "Eindscore: " + score + " van de " + vragen.length;
    let bericht = "";
    const percentage = (score / vragen.length) * 100;
    if (percentage === 100) {
        bericht = "Perfect! Alles goed! ";
    } else if (percentage >= 75) {
        bericht = "Heel goed gedaan! ";
    } else if (percentage >= 50) {
        bericht = "Best goed, maar je kunt nog beter!";
    } else {
        bericht = "Oefen nog even, je kunt dit!";
    }
let overzicht = bericht + "<br><br>";
    for (let i = 0; i < vragen.length; i++) {
        const vraag = vragen[i];
        if (checks[i] === true) {
            overzicht += "Vraag " + (i + 1) + ": ✅ " + vraag.answer + " (+1)<br>";
        } else {
            overzicht += "Vraag " + (i + 1) + ": ❌ jij kiesde " + gekozen[i] + ", juist was " + vraag.answer + " (0)<br>";
        }
    }
    result.innerHTML = overzicht;
 
    volgendevraag.textContent = "Opnieuw spelen";
    volgendevraag.style.display = "inline-block";
}

function resetSpel() {
    currentQuestion = 0;
    score = 0;
    beantwoord = false;
    spelKlaar = false;
    checks = new Array(vragen.length).fill(null);
    gekozen = new Array(vragen.length).fill("");
    showQuestion();
}

choice1.addEventListener('click', function () { checkAnswer(choice1); });
choice2.addEventListener('click', function () { checkAnswer(choice2); });
choice3.addEventListener('click', function () { checkAnswer(choice3); });
choice4.addEventListener('click', function () { checkAnswer(choice4); });
