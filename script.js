// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {

    let guessCount = 1;
    let guess = prompt("Enter a number between 1 and 100.");

    while (guessCount <= totalGuesses) {
        if (guess === null) {
            return 0;
        }
        else if ((isNaN(guess) === true) && (guess !== null)) {
            guess = prompt("Please enter a number.");
        }
        else if (guess < numToGuess) {
            guess = prompt(guess + " is too small. Guess a larger number.");
            guessCount += 1;
        }
        else if (guess > numToGuess) {
            guess = prompt(guess + " is too large. Guess a smaller number.");
            guessCount += 1;
        } 
        else if (guess == numToGuess) {
            return guessCount;
        }
    }
    return 0;

    /*if (guess == numToGuess) {
        return guessCount;
    }
    else {
        return 0;
    }*/
}
