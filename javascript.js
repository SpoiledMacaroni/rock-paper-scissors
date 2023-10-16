console.log("Hello World!");
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function round() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log('Your Choice: ' + playerSelection)
    console.log('Computer Choice: ' + getComputerChoice());
    
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

