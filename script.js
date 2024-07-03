

// Computer Choice Function 
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3); // Generates random int from 0-2
    
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

// Player Choice Function
function getHumanChoice() {

    let humanChoice = prompt('Rock, Paper, or Scissors?');

    humanChoice = humanChoice.toLowerCase(); // handle case insensitive cases

    return humanChoice;
}

//Play Game Function
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

//Play Round Function
    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice) { //Tie Case
            console.log("Tie! Computer Choice was " + computerChoice + ".");
        }

    switch(humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                console.log("Computer Choice was "  + computerChoice + "! You lose!");
                computerScore++;
            }
            if (computerChoice == 'scissors') {
                console.log("Computer choice was " + computerChoice + ". You win!");
                humanScore++;
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                console.log("Computer Choice was " + computerChoice + "! You lose!");
                computerScore++;
                
            }
            if (computerChoice == 'rock') {
                console.log("Computer Choice was " + computerChoice + ". You win!");
                humanScore++;
                
            }
            break;
        case 'scissors':
            if (computerChoice == 'rock') {
                console.log("Computer Choice was " + computerChoice + "! You lose!");
                computerScore++;
                
            }
            if (computerChoice == 'paper') {
                console.log("Computer Choice was " + computerChoice + ". You win!");
                humanScore++;
                
            }
        }
        console.log("SCORE: \n" + "Computer: " + computerScore + " You: " + humanScore); // Display the Score after every Round
    }
        if (computerScore > humanScore) { //Display win/loss/tie based off of final score
            console.log("You Lost!");
        }
        else if (computerScore < humanScore) {
            console.log("You won!");
        }
        else {
            console.log("You Tied!");
        }
}

playGame(); //Start Game

