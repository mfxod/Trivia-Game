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
let unanswered = 0;
let question = 0;
let answerChoice = "";
let clicked = false;

// variables for timer functions
let qInt = true;
let qTimer = 20;
let aInt = true;
let aTimer = 5;

// variable to move through trivia array when changing questions
let tIndex = 0;



// ----- FUNCTIONS -----

// builds and displays question
function showQuestion() {
    $("#trivia-q-and-a").html($("<p>").text(trivia[tIndex].question));

    for (let j = 0; j < trivia[tIndex].answer.length; j++) {
        $("#trivia-q-and-a").append($("<p>").addClass("answer-choice").text(trivia[tIndex].answer[j]));
    }
}

// use the variable clicked as a condition for calling evalAnswer()
// function isClicked() {
//     clicked = true;
//     console.log("Clicked!")
// }

// unanswered: show right answer, answerTimer(), reset()
function notAnswered() {
    $("#trivia-q-and-a").html($("<p>").text("Time's up. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    unanswered++;
    console.log("Unanswered: " + unanswered);
    tIndex++;
    console.log("tIndex: " + tIndex);
}

// right answer: show "correct!" msg, answerTimer(), reset()
function rightAnswer() {

    $("#trivia-q-and-a").html($("<p>").text("Right! The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    right++;
    console.log("Right: " + right);
    tIndex++;
    console.log("tIndex: " + tIndex);
}

// wrong answer: show right answer, answerTimer(), reset()
function wrongAnswer() {
    $("#trivia-q-and-a").html($("<p>").text("Wrong. The correct answer is:"));
    $("#trivia-q-and-a").append($("<p>").text(trivia[tIndex].right));
    wrong++;
    console.log("Wrong: " + wrong);
    tIndex++;
    console.log("tIndex: " + tIndex);
}

function evalAnswer(event) {
    answerChoice = $(event.target).text();

    if (answerChoice === trivia[tIndex].right) {
        clearInterval(qInt)
        rightAnswer();
        console.log("Right answer!");
    } else {
        clearInterval(qInt)
        wrongAnswer();
        console.log("Wrong answer.");
    }
}

// set a 20 sec. countdown for answering question
function questionTimer() {
    qInt = setInterval(qCountDown, 1000);
}

function qCountDown() {
    qTimer--;
    if (qTimer === 0) {
        clearInterval(qInt)
        notAnswered();
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
    }
}

// start game
function startGame() {
    $("#start-btn").hide();
    questionTimer();
    showQuestion();
}

// reset timer and show next question
function reset() {

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

    // evalAnswer();

    // endGame();

})