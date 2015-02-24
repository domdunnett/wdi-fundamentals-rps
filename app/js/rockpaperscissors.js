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
var playerMove = "";
var compMove = "";

// Function below checks to see if the user enters one of the three possible answers and assigns it to the playerMove global variable.
// Continues to ask until asnwer is valid.
function getValidPlayerMove() {
    var move = getInput();
    var correctInput = function(move) {
        if(move === "rock" || move === "paper" || move === "scissors") {
            console.log("You chose " + move);
            return true;
        }
        else {
            return false;
        }
    };
    while(correctInput(move) === false){
        console.log("That is not a valid answer. Please try again");
        move = getInput();
    }
    playerMove = move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    compMove = randomPlay();
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("The Computer chose " + compMove)
}

function getWinner(playerMove, compMove) {
    if (playerMove === compMove) 
    {
        return ("The result is a tie!");
    }
    else if (playerMove === "rock") 
    {
        if (compMove === "scissors")
            return ("Player wins with rock");
        else
            return ("Computer wins with paper");
    }
    else if (playerMove === "paper") 
    {
        if (compMove === "rock")
            return ("Player wins with paper");
        else
            return ("Computer wins with scissors");
    }
    else if (playerMove === "scissors") 
    {
        if (compMove === "rock")
            return ("Computer wins with rock");
    else 
            return ("Player wins with scissors");
    }
}

function playerWins() {

}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins < 5 && computerWins < 5) {
        var usermove = getValidPlayerMove();
        var machinemove = getComputerMove();
        var winner = getWinner(usermove,machinemove);
        if(winner.indexOf("Player")) {
            playerWins++;
        }
        else if(winner.indexOf("Computer")) {
            computerWins++;
        }
    }
    if(playerWins > computerWins) {
        console.log("Player wins by a score of " + playerWins + " to " + computerWins);
    }
    else {
        console.log("Computer wins by a score of " + computerWins + " to " + playerWins);
    }
}

