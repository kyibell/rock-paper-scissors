let humanScore = 0;
let computerScore = 0;

// Computer Choice Function 
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3); // Generates random int from 0-2
    
     // console.log(choice);

    switch(choice) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors'
            break;
    }

    return choice;
}

// Player Choice Function (make sure it is case insensitive).

function getHumanChoice() {

    let humanChoice = prompt('Rock, Paper, or Scissors?');

    humanChoice = humanChoice.toLowerCase(); // handle case insensitive cases

    return humanChoice;
}

//Play Round Function

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();


}


