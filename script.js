const title = document.getElementById("title");
const questionText = document.getElementById("questionText");
const flagImage = document.getElementById("flag");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const resultText = document.getElementById("result");
const checksText = document.getElementById("checks");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next");
 
let questionNumber = 1;
let score = 0;
let checks = "";
let correctButton = 0;
let answered = false;
 
title.textContent = "Welke vlag is dit?";
nextButton.textContent = "Volgende";
//  dit is een comment
function showQuestion() {
    answered = false;
    resultText.textContent = "";
    nextButton.style.display = "none";
    questionText.textContent = "Vraag " + questionNumber + " van de 20";
 
    button1.classList.remove("correct", "wrong");
    button2.classList.remove("correct", "wrong");
    button3.classList.remove("correct", "wrong");
    button4.classList.remove("correct", "wrong");
 
    if (questionNumber === 1) {
        flagImage.src = "https://flagcdn.com/w320/nl.png";
        button1.textContent = "France";
        button2.textContent = "Luxembourg";
        button3.textContent = "Netherlands";
        button4.textContent = "Russia";
        correctButton = 3;
    }
    else if (questionNumber === 2) {
        flagImage.src = "https://flagcdn.com/w320/fr.png";
        button1.textContent = "Italy";
        button2.textContent = "France";
        button3.textContent = "Belgium";
        button4.textContent = "Ireland";
        correctButton = 2;
    }
    else if (questionNumber === 3) {
        flagImage.src = "https://flagcdn.com/w320/lu.png";
        button1.textContent = "Luxembourg";
        button2.textContent = "Netherlands";
        button3.textContent = "Germany";
        button4.textContent = "Russia";
        correctButton = 1;
    }
    else if (questionNumber === 4) {
        flagImage.src = "https://flagcdn.com/w320/ru.png";
        button1.textContent = "Poland";
        button2.textContent = "Russia";
        button3.textContent = "France";
        button4.textContent = "Austria";
        correctButton = 2;
    }
    else if (questionNumber === 5) {
        flagImage.src = "https://flagcdn.com/w320/de.png";
        button1.textContent = "Belgium";
        button2.textContent = "Germany";
        button3.textContent = "Spain";
        button4.textContent = "Sweden";
        correctButton = 2;
    }
    else if (questionNumber === 6) {
        flagImage.src = "https://flagcdn.com/w320/be.png";
        button1.textContent = "Belgium";
        button2.textContent = "Italy";
        button3.textContent = "Greece";
        button4.textContent = "Norway";
        correctButton = 1;
    }
    else if (questionNumber === 7) {
        flagImage.src = "https://flagcdn.com/w320/it.png";
        button1.textContent = "Ireland";
        button2.textContent = "Hungary";
        button3.textContent = "Italy";
        button4.textContent = "France";
        correctButton = 3;
    }
    else if (questionNumber === 8) {
        flagImage.src = "https://flagcdn.com/w320/es.png";
        button1.textContent = "Portugal";
        button2.textContent = "Spain";
        button3.textContent = "Turkey";
        button4.textContent = "Brazil";
        correctButton = 2;
    }
    else if (questionNumber === 9) {
        flagImage.src = "https://flagcdn.com/w320/jp.png";
        button1.textContent = "China";
        button2.textContent = "Japan";
        button3.textContent = "Poland";
        button4.textContent = "Canada";
        correctButton = 2;
    }
    else if (questionNumber === 10) {
        flagImage.src = "https://flagcdn.com/w320/br.png";
        button1.textContent = "Brazil";
        button2.textContent = "Portugal";
        button3.textContent = "Spain";
        button4.textContent = "Greece";
        correctButton = 1;
    }
    else if (questionNumber === 11) {
        flagImage.src = "https://flagcdn.com/w320/ca.png";
        button1.textContent = "Austria";
        button2.textContent = "Switzerland";
        button3.textContent = "Canada";
        button4.textContent = "Turkey";
        correctButton = 3;
    }
    else if (questionNumber === 12) {
        flagImage.src = "https://flagcdn.com/w320/se.png";
        button1.textContent = "Norway";
        button2.textContent = "Sweden";
        button3.textContent = "Finland";
        button4.textContent = "Greece";
        correctButton = 2;
    }
    else if (questionNumber === 13) {
        flagImage.src = "https://flagcdn.com/w320/no.png";
        button1.textContent = "Sweden";
        button2.textContent = "Denmark";
        button3.textContent = "Norway";
        button4.textContent = "Finland";
        correctButton = 3;
    }
    else if (questionNumber === 14) {
        flagImage.src = "https://flagcdn.com/w320/ie.png";
        button1.textContent = "Ireland";
        button2.textContent = "Italy";
        button3.textContent = "India";
        button4.textContent = "Poland";
        correctButton = 1;
    }
    else if (questionNumber === 15) {
        flagImage.src = "https://flagcdn.com/w320/pl.png";
        button1.textContent = "Poland";
        button2.textContent = "Austria";
        button3.textContent = "Indonesia";
        button4.textContent = "Germany";
        correctButton = 1;
    }
    else if (questionNumber === 16) {
        flagImage.src = "https://flagcdn.com/w320/ch.png";
        button1.textContent = "Denmark";
        button2.textContent = "Switzerland";
        button3.textContent = "Austria";
        button4.textContent = "Canada";
        correctButton = 2;
    }
    else if (questionNumber === 17) {
        flagImage.src = "https://flagcdn.com/w320/gr.png";
        button1.textContent = "Greece";
        button2.textContent = "Finland";
        button3.textContent = "Sweden";
        button4.textContent = "Argentina";
        correctButton = 1;
    }
    else if (questionNumber === 18) {
        flagImage.src = "https://flagcdn.com/w320/pt.png";
        button1.textContent = "Spain";
        button2.textContent = "Portugal";
        button3.textContent = "Brazil";
        button4.textContent = "Italy";
        correctButton = 2;
    }
    else if (questionNumber === 19) {
        flagImage.src = "https://flagcdn.com/w320/tr.png";
        button1.textContent = "Tunisia";
        button2.textContent = "Turkey";
        button3.textContent = "Japan";
        button4.textContent = "Morocco";
        correctButton = 2;
    }
    else {
        flagImage.src = "https://flagcdn.com/w320/at.png";
        button1.textContent = "Poland";
        button2.textContent = "Latvia";
        button3.textContent = "Austria";
        button4.textContent = "Switzerland";
        correctButton = 3;
    }
}
 
function checkAnswer(chosenButton) {
    if (answered === true) {
        return;
    }
 
    answered = true;
 
    if (chosenButton === correctButton) {
        score = score + 1;
        checks = checks + "✓ ";
        resultText.textContent = "Goed!";
    }
    else {
        resultText.textContent = "Fout!";
    }
 
    if (correctButton === 1) {
        button1.classList.add("correct");
    }
    else if (correctButton === 2) {
        button2.classList.add("correct");
    }
    else if (correctButton === 3) {
        button3.classList.add("correct");
    }
    else {
        button4.classList.add("correct");
    }
 
    if (chosenButton !== correctButton) {
        if (chosenButton === 1) {
            button1.classList.add("wrong");
        }
        else if (chosenButton === 2) {
            button2.classList.add("wrong");
        }
        else if (chosenButton === 3) {
            button3.classList.add("wrong");
        }
        else {
            button4.classList.add("wrong");
        }
    }
}
