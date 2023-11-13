"use strict";

let random = Math.trunc(Math.random() * 40) + 1;
let message = document.querySelector(".message");
let score = 7;
let highScore = localStorage.getItem("savedScore1");

// For local-storage interface
if (highScore !== null) {
  document.querySelector(".highscore").textContent = highScore;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  switch (true) {
    case !guess: //this code is going to executed if you input no value
      message.textContent = "No number!";
      break;
    case score <= 1: //this code is going to executed if you out of life
      message.textContent = "You lose!";
      document.querySelector("body").style.backgroundColor = "#B23028";
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").style.width = "100%";
      document.querySelector(".number").textContent = random;
      break;
    case guess === random: //this code is going to executed if you win
      message.textContent = "Congratulations, you win!";
      document.querySelector("body").style.backgroundColor = "#58BB44";
      document.querySelector(".number").style.width = "100%";
      document.querySelector(".number").textContent = random;
      document.querySelector(".check").classList.add("not-allowed")

      if (highScore === null || score > highScore) {
        // this if statement is for localStorage
        highScore = score;
        localStorage.setItem("savedScore1", highScore);
        document.querySelector(".highscore").textContent = highScore;
      }
      break;
    case guess > random: // this code is going to executed if your guess higher than computer
      message.textContent = "Try with lower number";
      score--;
      document.querySelector(".score").textContent = score;
      break;
    case random > guess: // this code is going to executed if your guess lower than computer
      message.textContent = "Try with higher number";
      score--;
      document.querySelector(".score").textContent = score;
      break;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  random = Math.trunc(Math.random() * 40) + 1;
  document.querySelector(".number").textContent = "?";
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  document.querySelector(".check").classList.remove("not-allowed")

});
