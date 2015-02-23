////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var playerMove = getInput();
        switch(playerMove) {
            case "rock":
                console.log("You chose rock!");
                break;
            case "paper":
                console.log("You chose paper!");
                break;
            case "scissors":
                console.log("You chose scissors!");
                break;
            default:
                console.log("That is not a valid choice. Please choose again.");
        }
    return playerMove;
}

/*    // Write an expression that operates on a variable called `move`
    var playerMove = getInput();
    // If a `move` has a value, your expression should evaluate to that value.
    var validChoices = ["rock", "paper", "scissors"]
    
    for (i = 0; i < validChoices.length; i++) {
        while(playerMove !== validChoices[i]) {
            console.log("Invalid choice...try again!");
            playerMove = getInput();
        }
        console.log("You chose " + playerMove);
        return playerMove;
    }*/

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var compMove = randomPlay();
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return compMove;
}

function getWinner(playerMove, compMove) {
    if (playerMove === compMove) 
    {
    return ("The result is a tie!");
    }
    else if (playerMove === "rock") 
    {
        if (compMove === "scissors")
            return ("rock wins");
        else
            return ("paper wins");
    }
    else if (playerMove === "paper") 
    {
        if (compMove === "rock")
            return ("paper wins");
        else
            return ("scissors wins");
    }
    else if (playerMove === "scissors") 
    {
        if (compMove === "rock")
            return ("rock wins");
    else 
            return ("scissors wins");
    }
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

