// start button to begin game sets everything up

// use setInterval to time questions

// use clearInterval to move to next question

// for (let i = 0; i < trivia.length; i++) {
//  if (user answers correctly) {
//      show "correct!" msg and go to next question
//  } else if (user answers incorrectly) {
//      show the correct answer and go to next question
//  } else {
//      wait until timer runs out then go to next question
//  }
// }

// display at end of game:
// wins, losses and unanswered
// show button to play again which resets game to new round



// ----- GLOBAL VARIABLES -----

const trivia = [
    {
        question: "Who directed 2001: A Space Odyssey?",
        answer: ["Steven Spielberg", "Andrei Tarkovsky", "Stanley Kubrick", "George Lucas"],
        right: "Stanley Kubrick"
    },
    {
        question: "What is the destination of the spacecraft Discovery One?",
        answer: ["Mars", "Jupiter", "Alpha Centauri", "Tatooine"],
        right: "Jupiter"
    },
    {
        question: "What mysterious phenomenon recurs throughout the film?",
        answer: ["crop circles", "a UFO sighting", "the Borg", "a black monolith appears"],
        right: "a black monolith appears"
    },
    {
        question: "What is the name of the computer controlling the ship?",
        answer: ["Alex", "R2D2", "HAL 9000", "Jethro"],
        right: "HAL 9000"
    },
    {
        question: "When HAL first defies Dave, what command does he refuse to obey?",
        answer: ["Make me a grilled cheese, HAL.", "Open the pod bay doors, HAL.", "OK, HAL, how many lightyears to Jupiter?", "HAL, play NPR One."],
        right: "Open the pod bay doors, HAL."
    },
];

let right = 0;
let wrong = 0;
let unaswered = 0;
let question = 0;

// these control when the intervals fire
let qInt = true;
let qTimer = 31;
let aInt = true;
let aTimer = 5;



// ----- FUNCTIONS -----

// Katie's advice to simplify: set one function for timers and pass each timer as a parameter
// but will this work since I want one timer to .text and the other to be hidden?

// set a 30 sec. countdown for answering question
function questionTimer() {
    qInt = setInterval(qCountDown, 1000);
}

function qCountDown() {
    qTimer--;
    if (qTimer === 0) {
        clearInterval(qInt)
    } else {
        $("#timer").text(qTimer)
    }
}

// set a 5 sec. countdown for showing the correct answer
function answerTimer() {
    qInt = setInterval(aCountDown, 1000);
}

function aCountDown() {
    aTimer--;
    if (aTimer === 0) {
        clearInterval(aInt)
    } else {
        $("#timer").text(aTimer)
    }
}

// builds and displays question
function showQuestion(object) {
    $("#trivia-q-and-a").html($("<p>").text(object[0].question));
    for (let j = 0; j < object[0].answer.length; j++) {
        $("#trivia-q-and-a").append($("<p>").text(object[0].answer[j]));
    }
}

// right answer: show "correct!" msg, answerTimer(), reset()
function rightAnswer() {

}

// wrong answer: show right answer, answerTimer(), reset()
function wrongAnswer() {

}

// start game
function startGame() {
    $("#start-btn").remove();
    questionTimer();
    showQuestion(trivia);
}

// reset timer and show next question
function reset() {

}



// ----- PROCESS -----

$( document ).ready(function() {

    $("#start-btn").on("click", startGame);


})