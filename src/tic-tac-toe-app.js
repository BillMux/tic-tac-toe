$(document).ready(function() {
  var ticTacToe = new TicTacToe();

  $('#noughts').click(function() {
    ticTacToe.chooseWeapon('O');
  });
  $('#crosses').click(function() {
    ticTacToe.chooseWeapon('X');
  });
});
