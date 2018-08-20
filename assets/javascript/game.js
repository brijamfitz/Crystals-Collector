// GLOBAL VARIABLES
// ===================================================
var wins = 0;
var losses = 0;
var score = 0;
var counter = 0;
var targetNumber;
var gameEnd = false;


// FUNCTIONS
// ===================================================
// Function to reset game
    // Randomly generate target number between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log(targetNumber);

    // Push target number to dom using jquery
    $('#number-to-guess').append(targetNumber);

    // Randomly generate 4 numbers from 1-12 and and assign that value to a gem
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption1);
    // Push number to dom
    $('#crystal-1').append(numberOption1);

    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption2);
    // Push number to dom
    $('#crystal-2').append(numberOption2);

    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption3);
    // Push number to dom
    $('#crystal-3').append(numberOption3);

    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption4);
    // Push number to dom
    $('#crystal-4').append(numberOption4);

    // Reset total score

// Function to click and add value to total score
function adder() {

}

// Function to check win - if total score matches random numnber value
function checkWin () {

}

// Function to check loss - if total score exceeds random number value
function checkLoss () {

}

// MAIN GAME LOGIC
// ===================================================
// Ensures dom loads before any javascript is executed
$(document).ready(function () {



}) 
// end dom ready function
