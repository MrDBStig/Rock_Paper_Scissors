"use strict";

// Variables
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundWinner;

// **************************************
// **************** GAME ****************
// **************************************

// Single round
const playRound = function (playerSelection, computerSelection) {
  if (!playerSelection) return;

  // If both players have same result
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }

  // If player win
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    roundWinner = "player";
  }

  // If player lost
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerSelection++;
    roundWinner = "computer";
  }

  updateScoreMessage(roundWinner, playerSelection, computerSelection);
};

// Returns randomly selected value (simulation computer's choice)
const getRandomChoice = function () {
  let randomChoiceKey = Math.floor(Math.random() * 3);
  return choices[randomChoiceKey];
};

// Setting up 5 score max for each player
const isGameOver = function () {
  return playerScore === 5 || computerScore === 5;
};

// ************************************
// **************** UI ****************
// ************************************
