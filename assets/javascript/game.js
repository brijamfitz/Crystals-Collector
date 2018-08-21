$(document).ready(function () {

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
// function resetGame () {
    // Randomly generate target number between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log(targetNumber);

    // Push target number to dom using jquery
    $('#number-to-guess').append(targetNumber);

    // Randomly generate a number from 1-12 and assign to variable
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption1);

    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption2);
    
    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption3);
    
    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log(numberOption4);
    
    // Store those four numbers in array
    var numberOptions = [numberOption1, numberOption2, numberOption3, numberOption4];
    console.log(numberOptions);

    // Loop through array and create crystals for every number option
    for (var i = 0; i < numberOptions.length; i++) {
        console.log(numberOptions[i]);
        
        // For each iteration, create an imageCrystal
        var imageCrystal = $("<img>");

        // Give each crystal the class .crystal-image
        imageCrystal.addClass("crystal-image");

        // Give each imageCrystal an src link to image of crystal
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        // Give each imageCrystal an attribute called data-cyrstalValue
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Add each crystalImage to html id
        $("#crystals").append(imageCrystal);
        console.log(imageCrystal);
    }

// }

// Click event will apply to all crystals
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    
// Function to click and add value to total score
// function adder() {
    // When user clicks on a gem, add its value to the total score, and for each subsequent gem click, add that value on to total score
    // Extract value of each gem
    $('#total-score').append(counter);


    // Add this value to the counter
    // counter = numberOption1 + numberOption2

    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter > targetNumber) {
        alert("You lose!");
    }

})

});
    
// }

// Function to check win - if total score matches target number value
// function checkWin () {
    // $('#total-wins').append(wins);
    // if (counter === targetNumber) {
    //     alert("You win!");
    //     wins++;
    //   }
// }

// Function to check loss - if total score exceeds target number value
// function checkLoss () {
    // $('#total-losses').append(losses);
    // if (counter >= targetNumber) {
    //     alert("You lose!!");
    //     losses++;
    // }
// }

// MAIN GAME LOGIC
// ===================================================
// Ensures dom loads before any javascript is executed



// end dom ready function
