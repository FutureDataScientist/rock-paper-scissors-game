const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("comuterscoredisplay");
let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerchoice === computerchoice) {
    result = "IT's A TIE!";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "scissors" ? "YOu WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerchoice === "rock" ? "YOu WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerchoice === "paper" ? "YOu WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerdisplay.textContent = `Player:${playerchoice}`;
  computerdisplay.textContent = `Computer:${computerchoice}`;
  resultdisplay.textContent = result;

  resultdisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOu WIN!":
      resultdisplay.classList.add("greenText");
      playerscore++;
      playerscoredisplay.textContent = playerscore;
      break;
    case "YOU LOSE!":
      resultdisplay.classList.add("redText");
      computerscore++;
      computerscoredisplay.textContent = computerscore;
      break;
  }
}
