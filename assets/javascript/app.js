// start button to begin game

// use setInterval to time questions

// use clearInterval to move to next question

// if (user answers correctly) {
//     show "correct!" msg and go to next question
// } else if (user answers incorrectly) {
//     show the correct answer and go to next question
// } else {
//     wait until timer runs out then go to next question
// }

// display at end of game:
// wins, losses and unanswered
// show button to play again which resets game to new round

// use timer like stopwatch activity
// store questions in array or object



// ----- QUESTIONS -----
// how to get next question? iterate through object?



// ----- GLOBAL VARIABLES -----

let right = 0;
let wrong = 0;
let unaswered = 0;

let timerRunning = false;
let time = 0;
let question = 1;

const trivia = {
    q1: "Who directed 2001: A Space Odyssey?",
    q2: "In what year was the film made?",
    q3: "What is the destination of the spacecraft Discovery One?",
    q4: "What mysterious object appears throughout the film?",
    q5: "What is the name of the computer controlling the ship?",
    q6: "When HAL first openly defies Dave, what command does he refuse to obey?"
}

const answers = {
    q1: ["Steven Spielberg", "Andrei Tarkovsky", "Stanley Kubrick", "George Lucas"],
    q2: ["2001", "1988", "1978", "1968"],
    q3: ["Mars", "Jupiter", "Europa", "Tatooine"],
    q4: ["a crop circle", "the Death Star", "Andrei Tarkovsky", "a black monolith"],
    q5: ["C3PO", "HAL 2001", "HAL 9000", "Jethro"],
    q6: ["Make me a grilled cheese, HAL.", "Open the pod bay doors, HAL.", "OK, HAL, how many lightyears to Jupiter?", "HAL, play NPR One."]
}

// ----- FUNCTIONS -----

// press button to start timer and show first question
startGame() {

}

// reset timer and show next question
reset() {

}

// right answer: show "correct!" msg, wait, reset()
rightAnswer() {

}

// wrong answer: show right answer, wait, reset()
wrongAnswer() {

}




// ----- PROCESS -----

$( document ).ready(function() {



})