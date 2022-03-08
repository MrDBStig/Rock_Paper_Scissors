"use strict";

// Variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundWinner;

// Single round
const playRound = function (playerSelection, computerSelection) {
  if (!playerSelection) return;

  // If both players have same result
  if (playerSelection === computerSelection) {
    return (roundWinner = "tie");
  }

  // If player win
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return (roundWinner = "player");
  }

  // If player lost
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerSelection++;
    return (roundWinner = "computer");
  }
};

// Returns randomly selected value (simulation computer's choice)
const computerPlay = function () {
  const randomChoiceKey = Math.floor(Math.random() * 3);
  return choices[randomChoiceKey];
};
