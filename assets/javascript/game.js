$(document).ready(function () {

// GLOBAL VARIABLES
// =====================================================================
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber;

$("#total-wins").html("Wins: " + wins); 
$("#total-losses").html("Losses: " + losses);
   
// MAIN
// =====================================================================

    // Randomly generate target number between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log("This is the target number: " + targetNumber);

    // Push target number to dom using jquery
    $("#number-to-guess").html(targetNumber);

    // Randomly generate a number from 1-12 and assign to variable
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 1 value: " + numberOption1);

    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 2 value: " + numberOption2);
    
    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 3 value: " + numberOption3);
    
    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 4 value: " + numberOption4);
    
    // Give each imageCrystal an src link to image of crystal
    $(".crystal-image-1").attr("src", "assets/images/crystal-1.jpg");

    $(".crystal-image-2").attr("src", "assets/images/crystal-2.jpg");

    $(".crystal-image-3").attr("src", "assets/images/crystal-3.jpg");

    $(".crystal-image-4").attr("src", "assets/images/crystal-4.jpg");

    // Give each imageCrystal an attribute called data-crystalValue
    $(".crystal-image-1").attr("data-crystalvalue", numberOption1);
    $(".crystal-image-2").attr("data-crystalvalue", numberOption2);
    $(".crystal-image-3").attr("data-crystalvalue", numberOption3);
    $(".crystal-image-4").attr("data-crystalvalue", numberOption4);

    // Click event will apply to all crystals
    $(".crystal-image-1").on("click", function() {

        // Convert crystalValue attr to integer before adding to counter
        var crystalValue = ($(".crystal-image-1").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        // Add crystalValue to the user's counter
        counter += crystalValue;

        // When user clicks on a gem, add its value to the total score, and for each subsequent gem click, add that value on to total score
        $('#total-score').html(counter);

        // Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();         
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }

    })

    $(".crystal-image-2").on("click", function() {

        var crystalValue = ($(".crystal-image-2").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

        // Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }

    })

    $(".crystal-image-3").on("click", function() {

        var crystalValue = ($(".crystal-image-3").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

        // Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();          
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }

    })

    $(".crystal-image-4").on("click", function() {

        var crystalValue = ($(".crystal-image-4").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

        // Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();          
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();            
            resetGame();
        }

    })  

// Reset game function
function resetGame() {
    
    // Randomly generate target number between 19-120
    targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log("This is the target number: " + targetNumber);

    // Push target number to dom using jquery
    $("#number-to-guess").html(targetNumber);

    // Randomly generate a number from 1-12 and assign to variable
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 1 value: " + numberOption1);

    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 2 value: " + numberOption2);
    
    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 3 value: " + numberOption3);
    
    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 4 value: " + numberOption4);

    $(".crystal-image-1").attr("src", "assets/images/crystal-1.jpg");

    $(".crystal-image-2").attr("src", "assets/images/crystal-2.jpg");

    $(".crystal-image-3").attr("src", "assets/images/crystal-3.jpg");

    $(".crystal-image-4").attr("src", "assets/images/crystal-4.jpg");

    $(".crystal-image-1").attr("data-crystalvalue", numberOption1);
    $(".crystal-image-2").attr("data-crystalvalue", numberOption2);
    $(".crystal-image-3").attr("data-crystalvalue", numberOption3);
    $(".crystal-image-4").attr("data-crystalvalue", numberOption4);
    
    $(".crystal-image-1").on("click", function() {

        var crystalValue = ($(".crystal-image-1").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        if (counter === targetNumber) {
            resetGame();
        }
        else if (counter > targetNumber) {
            resetGame(); 
        }
    })
    
    $(".crystal-image-2").on("click", function() {

        var crystalValue = ($(".crystal-image-2").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        if (counter === targetNumber) {
            resetGame();
        }
        else if (counter > targetNumber) {
            resetGame(); 
        }
    })

    $(".crystal-image-3").on("click", function() {

        var crystalValue = ($(".crystal-image-3").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        if (counter === targetNumber) {
            resetGame();
        }
        else if (counter > targetNumber) {
            resetGame(); 
        }
    })

    $(".crystal-image-4").on("click", function() {

        var crystalValue = ($(".crystal-image-4").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        if (counter === targetNumber) {
            resetGame();
        }
        else if (counter > targetNumber) {
            resetGame(); 
        }
    })

    }

    });
