$(document).ready(function () {

// GLOBAL VARIABLES
// ===================================================
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber;

$("#total-wins").append("Wins: " + wins); // Need to replace, not append
$("#total-losses").append("Losses: " + losses); // Need to replace, not append

// MAIN
// ===================================================

    // Randomly generate target number between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log("This is the target number: " + targetNumber);

    // Push target number to dom using jquery
    $("#number-to-guess").append(targetNumber);

    // Randomly generate a number from 1-12 and assign to variable
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 1 value: " + numberOption1);

    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 2 value: " + numberOption2);
    
    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 3 value: " + numberOption3);
    
    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 4 value: " + numberOption4);
    
    // Store those four numbers in array
    var numberOptions = [numberOption1, numberOption2, numberOption3, numberOption4];

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
        
    }

// Click event will apply to all crystals
$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // When user clicks on a gem, add its value to the total score, and for each subsequent gem click, add that value on to total score
    // Extract value of each gem
    $('#total-score').append(counter); // Need to replace, not append

    // Win/lose statements
    if (counter === targetNumber) {
        wins++;
        alert("You win!");      
    }
    else if (counter > targetNumber) {
        losses++;
        alert("You lose!");
    }

    // Reset game function
    function resetGame () {

    }
    
})

});
