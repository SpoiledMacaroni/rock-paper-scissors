let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function endGame() {

}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const playerMove = document.querySelector('#playerMove');
    const computerMove = document.querySelector('#computerMove');
    const showPlayerScore = document.querySelector('#playerScore');
    const showComputerScore = document.querySelector('#computerScore');
    const showResult = document.querySelector('#result');
    // Displays Current Selections
    playerMove.textContent = 'Your Choice: ' + playerSelection;
    computerMove.textContent = 'Computer Choice: ' + computerSelection;
    //Calculates results when function is run
    if ((playerSelection === 'rock' && computerSelection ==='scissors')||(playerSelection === 'scissors' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        showResult.textContent = 'You Win!';
        showPlayerScore.textContent = 'Your Score: ' + playerScore;
        showComputerScore.textContent = 'Computer Score: ' + computerScore;
    } else if (playerSelection === computerSelection) {
        showResult.textContent = 'Tie!';
    } else {
        computerScore++;
        showResult.textContent = 'You lose! Try again!';
        showPlayerScore.textContent = 'Your Score: ' + playerScore;
        showComputerScore.textContent = 'Computer Score: ' + computerScore;
    }

    if (playerScore >= 5) {
    playerMove.textContent = "";
    computerMove.textContent = "";
    showPlayerScore.textContent = "";
    showComputerScore.textContent = "";
    showResult.textContent = "Congratulations! You won the match!";
    playerScore = 0
    computerScore = 0
    } else if (computerScore >= 5) {
        playerMove.textContent = "";
        computerMove.textContent = "";
        showPlayerScore.textContent = "";
        showComputerScore.textContent = "";
        showResult.textContent = "Sorry! You lost the match!";
        playerScore = 0
        computerScore = 0
    }
}


//This logic plays rounds until score hits 5.
/*
let lessThan5 = true;
function game() {
    while(lessThan5) {
        if (playerScore < 5 && computerScore < 5) {
            round()
        }
        else {
            lessThan5 = false;
        }
    }
}
game()
*/
