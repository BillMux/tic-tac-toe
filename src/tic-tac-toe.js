var gameBoard;
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const CELLS = document.querySelectorAll('.cell');

function startGame(weapon) {
  document.getElementById("start_game").style.display = "none";
  console.log(document.querySelector(".end_game"))
  document.querySelector(".end_game").style.display = "none"
  // ^html^    ^select div object^     ^change style "display" of .endgame
  //                                    to "none" at start
  startBoard = Array.from(Array(9).keys());
  // creates an array of the keys of new array
  for (var i = 0; i < CELLS.length; i++) {
    CELLS[i].innerText = '';
    CELLS[i].style.removeProperty('background-color');
    CELLS[i].addEventListener('click', turnClick, false);
  };
};

function resetGame() {

};

function turnClick(square) {
  console.log(square.target.id)
};


function endGame() {
  document.querySelector(".end_game").style.display = "show"
}; //                               changes back to "show" at end
