// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
var userGuess = document.getElementById("user-guess");
var computerGuess = document.getElementById("computer-guess");

var tieDisplay = document.getElementById("tie-count");
var winDisplay = document.getElementById("win-count");
var loseDisplay = document.getElementById("lose-count");
var tieCount = 0;
var winCount = 0;
var loseCount = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    userGuess.textContent = event.key;
    computerGuess.textContent = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess.textContent === computerGuess.textContent) {
        tieCount++;
        tieDisplay.textContent = tieCount;
    }
    else if (userGuess.textContent === "s") {
        if (computerGuess.textContent === "p") {
            winCount++;
            winDisplay.textContent = winCount;
        }
        else {
            loseCount++;
            loseDisplay.textContent = loseCount;
        }
    }
    else if (userGuess.textContent === "p") {
        if (computerGuess.textContent === "r") {
            winCount++;
            winDisplay.textContent = winCount;
        }
        else {
            loseCount++;
            loseDisplay.textContent = loseCount;
        }
    }
    else if (userGuess.textContent === "r") {
        if (computerGuess.textContent === "s") {
            winCount++;
            winDisplay.textContent = winCount;
        }
        else {
            loseCount++;
            loseDisplay.textContent = loseCount;
        }
    }
};