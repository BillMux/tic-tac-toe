var TicTacToe = function() {
  var weaponChoice;
  this.move = 0;
  this.grid = [
    [ , , ],
    [ , , ],
    [ , , ]
              ]
};

TicTacToe.prototype.chooseWeapon = function(choice) {
  this.weaponChoice = choice
};
