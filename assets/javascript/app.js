// for (let i = 0; i < trivia.length; i++) {
//  if (answerChoice === trivia[tIndex].right) {
//      show "correct!" msg, right answer, and go to next question
//  } else if (answerChoice !== trivia[tIndex].right) {
//      show "wrong" right answer and go to next question
//  } else {
//      wait until timer runs out
//      show right answer then go to next question
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
        answer: ["Alexa", "R2D2", "HAL 9000", "Jethro"],
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
let unanswered = 0;
let answerChoice = "";

// variables for timer functions
let qInt = false;
let qTimer = 10;
let aInt = false;
let aTimer = 3;

// variable to move through trivia array when changing questions
let tIndex = 0;



// ----- FUNCTIONS -----

// builds and displays question
function showQuestion() {
    questionTimer();
    $("#trivia-q-and-a").html($("<p>").text(trivia[tIndex].question));

    for (let j = 0; j < trivia[tIndex].answer.length; j++) {
        $("#trivia-q-and-a").append($("<p>").addClass("answer-choice").text(trivia[tIndex].answer[j]));
    }
}

// unanswered: show right answer, answerTimer(), reset()
function notAnswered() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Time's up. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    unanswered++;
    tIndex++;
}

// right answer: show "correct!" msg, answerTimer(), reset()
function rightAnswer() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Right! The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    right++;
    tIndex++;
}

// wrong answer: show right answer, answerTimer(), reset()
function wrongAnswer() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Wrong. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    wrong++;
    tIndex++;
}

function evalAnswer(event) {
    answerChoice = $(event.target).text();

    if (answerChoice === trivia[tIndex].right) {
        clearInterval(qInt);
        rightAnswer();
    } else {
        clearInterval(qInt);
        wrongAnswer();
    }
}

// set a 20 sec. countdown for answering question
function questionTimer() {
    qInt = setInterval(qCountDown, 1000);
}

function qCountDown() {
    qTimer--;
    $("#timer").text(qTimer + " sec.");
    if (qTimer === 0) {
        clearInterval(qInt);
        notAnswered();
    }
}

// set a 5 sec. countdown for showing the correct answer
function answerTimer() {
    qInt = setInterval(aCountDown, 1000);
}

function aCountDown() {
    aTimer--;
    if (aTimer === 0) {
        clearInterval(aInt);
        reset();
        showQuestion();
    }
}

// start game
function startGame() {
    $("#start-btn").hide();
    showQuestion();
}

// reset timer
function reset() {
    qInt = false;
    qTimer = 10;
    aInt = false;
    aTimer = 3;
    $("#timer").text("10 sec.");
}

// show right, wrong and unanswered
function endGame() {
    $("#trivia-q-and-a").html($("<p>").text("Right: " + right));
    $("#trivia-q-and-a").append($("<p>").text("Wrong: " + wrong));
    $("#trivia-q-and-a").append($("<p>").text("Unanswered: " + unanswered));
    $("#start-btn").show();
}



// ----- PROCESS -----

$(document).ready(function() {
    $(document).on("click", "#start-btn", startGame);
    $(document).on("click", ".answer-choice", evalAnswer);
    if (tIndex === 5) {
        endGame();
    }
});