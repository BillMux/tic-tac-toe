'use strict';

describe('game', function() {
  var game;

  beforeEach(function() {
    game = new TicTacToe();
  });

  it('gives player a choice of noughts or crosses', function() {
    game.chooseWeapon('X')
    expect(game.weaponChoice).toEqual('X')
  });
});
