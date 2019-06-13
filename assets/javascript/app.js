
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
let qTimer = 15;
let aInt = false;
let aTimer = 3;

// variable to move through trivia array when changing questions
let tIndex = 0;



// ----- FUNCTIONS -----

// builds and displays question
function showQuestion() {
    if (tIndex === 5) {
        endGame();
    } else {
        questionTimer();
        $("#trivia-q-and-a").html($("<p>").text(trivia[tIndex].question));

        for (let j = 0; j < trivia[tIndex].answer.length; j++) {
            $("#trivia-q-and-a").append($("<p>").addClass("answer-choice").text(trivia[tIndex].answer[j]));
        }
    }
}

// show right answer, answerTimer()
function notAnswered() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Time's up. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    unanswered++;
}

// show "correct!" msg, answerTimer()
function rightAnswer() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Right! The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    right++;
}

// show right answer, answerTimer()
function wrongAnswer() {
    answerTimer();
    $("#trivia-q-and-a").html($("<p>").text("Wrong. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    wrong++;
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

// set a countdown for answering question
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

// set a countdown for showing the correct answer
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

// start game with button click
function startGame() {
    tIndex = 0;
    $("#start-btn").hide();
    showQuestion();
}

// reset timer
function reset() {
    clearInterval(qInt);
    qInt = false;
    qTimer = 15;
    aInt = false;
    aTimer = 3;
    $("#timer").text("10 sec.");
    tIndex++;
}

// show right, wrong and unanswered, and show button to play again
function endGame() {
    clearInterval(aInt);
    clearInterval(qInt);
    $("#trivia-q-and-a").html($("<p>").text("Right: " + right));
    $("#trivia-q-and-a").append($("<p>").text("Wrong: " + wrong));
    $("#trivia-q-and-a").append($("<p>").text("Unanswered: " + unanswered));
    $("#start-btn").show().text("Try again?");
}



// ----- PROCESS -----

$(document).ready(function() {
    $(document).on("click", "#start-btn", startGame);
    $(document).on("click", ".answer-choice", evalAnswer);
});