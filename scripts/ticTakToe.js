const playerMove = "x";
const computerMove = "o";

let board = [ "", "", "",
              "", "", "",
              "", "", ""];

function getRandomPosition() {
  return Math.floor(Math.random() * 9);
}



function whiteSapces() {
  let freeSpaces = 9;

  for (let i = 0; i < 9; i++){
    if (board[i] !== "") {
      freeSpaces--
    }
  }
  return freeSpaces
}

function reset() {
  for (let i = 0; i < board.length; i++){
    board[i] = "";
  }
  document.querySelectorAll('.js-tic-tack').forEach((button) => {
    button.innerHTML = "";
  });
  showBoard()
  enableButtons();
  winnerMsg("");

}

function computer() {
  if (whiteSapces()>0) {
    while (true) {
      let randomPosition = getRandomPosition();
      if (board[randomPosition] === "") {
        board[randomPosition] = computerMove;
        showBoard();
        break;
      }
    }
  }
} 

function showBoard() {
  board.forEach((move,position) => {
    if (move !== "") {
      document.querySelector(`.js-tick-tack-pos-${position}`)
        .innerHTML = move;
    }
  })
}



function checkWinner() {
  for (let i = 0; i <= 6; i += 3) {
    if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
      return board[i];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
      return board[i];
    }
  }

  if (board[0] === board[4] && board[4] === board[8]) {
    return board[0];
  }
  if (board[2] === board[4] && board[4] === board[6]) {
    return board[2];
  }

  return ""
  
}

function winnerMsg(msg) {
  document.querySelector(".js-msg")
  .innerHTML=msg
}
function enableButtons() {
  document.querySelectorAll(".js-tic-tack").forEach((button) => {
    button.disabled = false;
  });
}
function disableButtons() {
  document.querySelectorAll(".js-tic-tack").forEach((button) => {
    button.disabled = true;
  });
}

function displayWinner(winner) {
  if (winner === "x") {
    winnerMsg("you won");
    disableButtons(); // Disable buttons after a winner is found
  } else if (winner === "o") {
    winnerMsg("you loose");
    disableButtons(); // Disable buttons after a winner is found
  } else {
    winnerMsg("Tie");
    disableButtons(); // Disable buttons after a tie
  }
}



//creating reset button
document.querySelector('.js-reset-btn').addEventListener("click", () => {
  reset();
});


function player() {
  document.querySelectorAll(".js-tic-tack").forEach((button, position) => {
    button.addEventListener("click", () => {
      if (board[position] === "") {
        board[position] = playerMove;
        showBoard();
        computer(); // Call the computer's move after the player's move
        const winner = checkWinner();
        if (winner !== "") {
          displayWinner(winner);
        }
      }
      console.log(board);
    });
  });
}

player()

