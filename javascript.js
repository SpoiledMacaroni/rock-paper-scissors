console.log("Hello World!");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    //Updating the console.log display to a DOM event
    //console.log('Your Choice: ' + playerSelection)
    const playerMove = document.querySelector('#playerMove');
    playerMove.textContent = 'Your Choice: ' + playerSelection;
    //playerMove.appendChild(playerMove);
    //console.log('Computer Choice: ' + getComputerChoice());

    const computerMove = document.querySelector('#computerMove');
    computerMove.textContent = 'Computer Choice: ' + computerSelection;
    //computerMove.appendChild(computerMove);
    
    if ((playerSelection === 'rock' && computerSelection ==='scissors')||(playerSelection === 'scissors' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log("You Win!"), playerScore++;
        console.log('Your Score: '+ playerScore)
    } else if (playerSelection === computerSelection) {
        console.log("Tie!")
    }    else {
        console.log('You lose!'), computerScore++;
        console.log('Computer Score: '+ computerScore);
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
