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
    "Luxemburg",
    "Netherlands",
    "Paraguay",
    "Russia",
    "Zuid-Afrika",
    "Sudan",
    "Namibia",
    "South Sudan",
    "Spanje",   
    "Portugal",
    "Colombia",
    "Ecuador",
    "Kenia",
    "Malawi",
    "Jemen",
    "Iraq",
    "Syria",
    "Egypt",
    "Bhutan",
    "Mongolia",
    "Sri Lanka",
    "Kazakhstan",
    "Lesotho",
    "Botswana",
    "Sierra Leone",
    "Somalia",
    "Croatia",
    "Norway",
    "Iceland",
    "Faroe Islands",
    "Denmark",
    "Brunei",
    "Saudi Arabia",
    "Pakistan",
    "Guatemala",
    "El Salvador",
    "Honduras",
    "Nicaragua",
    "Venezuela",
    "Bolivia",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Mozambique",
    "Kyrgyzstan",
    "North Macedonia",
    "Turkey",
    "Palau",
    "Bangladesh",
    "Japan",
    "Laos",
    "Ivory Coast",
    "Ireland",
    "Nigeria",
    "Italy",
    "San Marino",
    "Andorra",
    "Romania",
    "Moldova",
    "Chad",
    "Cape Verde",
    "European Union",
    "Kosovo",
    "Bosnia",
    "Herzegovina",
];
 
 
const vragen = [
    { flag: "Luxemburg", options: ["Nederland", "Paraguay", "Luxemburg", "Rusland"], answer: "Luxemburg" },
    { flag: "Zuid-Afrika", options: ["Sudan", "Zuid-Afrika", "Namibië", "South Sudan"], answer: "Zuid-Afrika" },
    { flag: "Spanje", options: ["Portugal", "Colombia", "Ecuador", "Spanje"], answer: "Spanje" },
    { flag: "Russia", options: ["Rusland", "Oekraïne", "Polen", "Belarus"], answer: "Russia" },
    { flag: "Kenia", options: ["Kenia", "Sudan", "Malawi", "South sudan"], answer: "Kenia" },
    { flag: "Jemen", options: ["Iraq", "Jemen", "Syrië", "Egypte"], answer: "Jemen" },
    { flag: "Bhutan", options: ["Mongolië", "Sri Lanka", "Bhutan", "Kazachstan"], answer: "Bhutan" },
    { flag: "Lesotho", options: ["Botswana", "Sierra Leone", "Lesotho", "Somalië"], answer: "Lesotho" },
    { flag: "Luxemburg", options: ["Nederland", "Luxemburg", "Paraguay", "Kroatië"], answer: "Luxemburg" },
    { flag: "Noorwegen", options: ["IJsland", "Faeröer", "Denemarken", "Noorwegen"], answer: "Noorwegen" },
    { flag: "Brunei", options: ["Saoedi-Arabië", "Pakistan", "Brunei", "Bhutan"], answer: "Brunei" },
    { flag: "Guatemala", options: ["El Salvador", "Guatemala", "Honduras", "Nicaragua"], answer: "Guatemala" },
    { flag: "Venezuela", options: ["Colombia", "Ecuador", "Bolivia", "Venezuela"], answer: "Venezuela" },
    { flag: "Servië", options: ["Slowakije", "Servië", "Slovenië", "Kroatië"], answer: "Servië" },
    { flag: "Mozambique", options: ["Kenia", "Zuid-Afrika", "Mozambique", "Zuid-Soedan"], answer: "Mozambique" },
    { flag: "Kirgizië", options: ["Kazachstan", "Kirgizië", "Noord-Macedonië", "Turkije"], answer: "Kirgizië" },
    { flag: "Palau", options: ["Bangladesh", "Japan", "Laos", "Palau"], answer: "Palau" },
    { flag: "Ivoorkust", options: ["Ierland", "Nigeria", "Ivoorkust", "Italië"], answer: "Ivoorkust" },
    { flag: "San Marino", options: ["Nicaragua", "San Marino", "El Salvador", "Honduras"], answer: "San Marino" },
    { flag: "Andorra", options: ["Roemenië", "Moldavië", "Tsjaad", "Andorra"], answer: "Andorra" },
    { flag: "Kaapverdië", options: ["Europese Unie", "Kaapverdië", "Kosovo", "Bosnië en Herzegovina"], answer: "Kaapverdië" },
    
];
 
let currentQuestion = 0;
let score = 0;
let checks = ""

function showQuestion() {
    const vraag = vragen[currentQuestion];




}
