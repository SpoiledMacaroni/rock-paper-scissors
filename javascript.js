console.log("Hello World!");

let choices = ['Rock', 'Paper', 'Scissors'];

let playerSelection = 'rock';
let computerSelection = getComputerChoice();

function getComputerChoice() {
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}


