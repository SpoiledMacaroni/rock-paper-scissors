console.log("Hello World!");

let choices = ['rock', 'paper', 'scissors'];
let score = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function round() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(getComputerChoice());
    
    if ((playerSelection === 'rock' && computerSelection ==='scissors')||(playerSelection === 'scissors' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'rock')) {
        console.log("You Win!"), score++;
        console.log(score)
    } else if (playerSelection === computerSelection) {
        console.log("Tie!")
    }    else {
        console.log('Keep working on it!');
    }
}

function game() {
while (score < 5) {
    round();
}
}

game()

