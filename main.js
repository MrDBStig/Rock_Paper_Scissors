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

  return roundWinner;
};

// Returns randomly selected value (simulation computer's choice)
const computerPlay = function () {
  const randomChoiceKey = Math.floor(Math.random() * 3);
  return choices[randomChoiceKey];
};

// Function to let user choose option
const userChoice = function () {
  return prompt(`Please type correctly. Case doesn't matter
Choose one option: rock, paper or scissors.
  `).toLowerCase();
};

// Game algorythm
const game = function () {
  const player = userChoice(); // Getting choice from user
  const computer = computerPlay(); // Generating random computer choice
  playRound(player, computer); // Playing 1 round of a game

  // Announcing winner of a round
  return roundWinner === "tie" ? `It's a tie!` : `${roundWinner} wins!`;
};

for (let i = 0; i < 5; i++) {
  console.log(game());
}
