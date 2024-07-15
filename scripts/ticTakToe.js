const playerMove = 'x';
const computerMove = 'o';

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
function insertPositionList(position) {

//finding the row position of the board
  let row = 0;
  let column = 0;

  if (position >= 0 && position <= 2) {
    row = 0;
  } else if (position >= 3 && position <= 5) {
    row = 1;
  } else {
    row = 2;
  }

//finding the column position of the boad
  let temp = position;
  if (position >= 3) {
    while (true) {
      temp -= 3;
      if ([0, 1, 2].includes(temp)) {
        column = temp;
        break;
      }
    }
  } else {
    column = position;
  }

  board[row][column] = playerMove;
}

function player() {
  
  document.querySelectorAll(".js-grid-button").forEach((button, position) => {
    button.addEventListener("click", () => {
      document.querySelector(`.js-button-${position}`).innerHTML = playerMove;

      insertPositionList(position);
    });
  });
}

player();