let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};
const compareGuesses = (human, computer, targetNumber) => {
    targetNumber = generateTarget();
    human = Math.abs(human - targetNumber);
    computer = Math.abs(computer - targetNumber);
    if (human === computer) {
      return true;
    } 
   if (human < computer) {
    return true;
  } if (human > computer ) {
    return false;
  }
};

 const updateScore = string => {
    if (string === 'human') {
        humanScore++;
    } 
    if (string === 'computer') {
      computerScore++;
    }
  };

const advanceRound = () => {
  currentRoundNumber++;
}

advanceRound();

