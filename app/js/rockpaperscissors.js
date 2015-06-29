'use strict';

var playerWins = 0;
var computerWins = 0;
var playerMove;
var computerMove;

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
    playerMove = move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    computerMove = move || randomPlay();
    prompt("computer chose " + computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove +' it is a tie!');
    } else {
      if (playerMove === 'scissors'){
            if (computerMove === 'rock') {
                computerWinsRound();
            } else {
                playerWinsRound();
            }
      } 
      if (playerMove === 'rock') {
            if (computerMove === 'scissors') {
                playerWinsRound();
            } else {
                computerWinsRound();
            } 
      } 
     
      if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                playerWinsRound();
             } else {  
                computerWinsRound();
             }
       }
   }
}

function computerWinsRound() {
    computerWins++;
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return computerWins;
}

function playerWinsRound() {
    playerWins++;
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    return playerWins;
}

function playTo(x) {
    for(var i = 0; i<x; i++){
    //   prompt("Let's play Rock, Paper, Scissors");
      getPlayerMove();
      getComputerMove();
      getWinner(playerMove,computerMove);
    if (playerWins === x) {
        alert("Game over, Player wins!!");
    } else if (computerWins === x) {
        alert("Game over, Computer wins!!");
    }
  }
    return [playerWins, computerWins];
}
playTo(3);
//problem = it counts a tie as a pass through the loop so it often doesn't get to the 'x'