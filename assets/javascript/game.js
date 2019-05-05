var userChoice = "";
var totalNumOfGuess=10;
var wins = 0;
var losses = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomIndex; //computer guess
var computerChoice;
var userGuesses;
var guessesDisplay = document.querySelector("#soFarGuess");


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //The maximum is inclusive and the minimum is inclusive  
}

function startGame() {
    userGuesses = [];
    totalNumOfGuess = 10;
    randomIndex = getRandomIntInclusive(0, letters.length - 1);
    computerChoice = letters[randomIndex];
    guessesDisplay.textContent = "";
    console.log("Computer :", computerChoice);
}

document.onkeyup = function (event) {
    userChoice = event.key;
    // console.log("user:", userChoice);
    userGuesses.push(userChoice);
    totalNumOfGuess = totalNumOfGuess - 1;
    // totalNumOfGuess--;
    // totalNumOfGuess -= 1;
    guessesDisplay.textContent = userGuesses.join(", ");
    // console.log("compare:", userChoice, computerChoice);
    if (userChoice == computerChoice) {
        wins++;
        // console.log("if", userChoice, computerChoice);
        document.getElementById("winsCount").innerHTML = wins;
        startGame();
    } else {
        // console.log("else:", userChoice, computerChoice);
        if (totalNumOfGuess === 0) {
            losses++;
            document.getElementById("lossesCount").innerHTML = losses;
            startGame();
        }     
    }
    document.getElementById("remainingGuesses").textContent = totalNumOfGuess;
}

document.getElementById("remainingGuesses").textContent = totalNumOfGuess;
startGame();




// <!-- Computer guesses a letter out of the 27 and stores it somewhere-->
// <!-- The user makes a guess and the guess is displayed-->
// <!-- totalNumberOfGuess=10 -->
// <!-- If userGuess=compChoice, we have a win, numOfWin++ and game resets-->
// <!-- If userGuess!==compChoice, guessesRemaining--add element to gueesdsofar
// when guessesRemaining=0 user looses and numOfLosses++ and Game reset -->
// <!-- Game reset means guessRemaing =10 and computer selects a new letter, and the guesses so far goes back to an empty list -->


