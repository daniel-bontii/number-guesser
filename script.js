let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * (9 - 0) + 0);
}

const getAbsoluteDistance = (guess, secreteTargetNumber) => {
  return Math.abs(guess - secreteTargetNumber);
}

const compareGuesses = (humanGuess, computerGuess, secreteTargetNumber) => {

  humanGuess = getAbsoluteDistance(humanGuess, secreteTargetNumber);
  computerGuess = getAbsoluteDistance(computerGuess, secreteTargetNumber);
  if (humanGuess < 0 || humanGuess > 9) {
    return window.alert('Your number is out of range');
  } else if (humanGuess < computerGuess || humanGuess === computerGuess) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  winner = winner.toLowerCase();
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      console.log(`${winner} is an unrecognized player`);
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
