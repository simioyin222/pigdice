let currentPlayer = 1;
let currentScore = 0;
let player1Score = 0;
let player2Score = 0;

function swithch player(){
  currentScore = 0;
  currentScoreElem.textContent = "Current Score: 0";
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}