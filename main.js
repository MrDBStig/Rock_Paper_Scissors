"use strict";

const computerPlay = function () {
  const choices = ["rock", "paper", "scissors"];
  const randomChoiceKey = Math.floor(Math.random() * 3);
  return choices[randomChoiceKey];
};

console.log(computerPlay());
