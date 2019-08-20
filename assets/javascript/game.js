
// Variables Established
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var numGuesses = 9;
var letterGuesses = [];

// CHALLENGE!
// Declare the random letter globally so it runs once on load.
// Create a reset function that resets your global variables to whatever you declared them as, then call that in your win/loss conditions.

// Loads scored board.
document.getElementById("wins").innerHTML = "Wins:  " + wins;
document.getElementById("losses").innerHTML = "Losses:  " + losses;
document.getElementById("turns").innerHTML = "Turns Left:  " + numGuesses;
document.getElementById("guesses").innerHTML = "Letters Guessed:  " + letterGuesses;

// Listens for a key to be pressed.
document.onkeyup = function(){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        // Updates Letters Guessed by user on page.
        letterGuesses.push(userGuess);
        document.getElementById("guesses").innerHTML = "Letters Guessed:  " + letterGuesses;

    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    
    console.log(computerGuess);

    // Compares user and computer guess and adds to wins or losses.
    if (userGuess === computerGuess){
        wins++;
        document.getElementById("wins").innerHTML = "Wins:  " + wins;
    } 
        // If user and computer do not match increment losses and decrement numGuesses.
        else (userGuess !== computerGuess)
            losses++; 
            numGuesses--;
            document.getElementById("losses").innerHTML = "Losses:  " + losses;
            document.getElementById("turns").innerHTML = "Turns Left:  " + numGuesses;
        
    // Check scoreboard for restrictions and reset game. 
    if(wins === 10){
        alert("Victory!")
    };
    if(losses === 9 || numGuesses === 0){
        alert("Game Over!")
    };

};