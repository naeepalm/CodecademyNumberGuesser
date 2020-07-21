let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, pcGuess, targetNumber) => {
    const userDifference = Math.abs(targetNumber - userGuess);
    const pcDifference = Math.abs(targetNumber - pcGuess);
    return userDifference <= pcDifference;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    };
}

const advanceRound = () => currentRoundNumber++;
