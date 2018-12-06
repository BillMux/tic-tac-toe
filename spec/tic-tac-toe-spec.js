'use strict';

describe('game', function() {
  var game;

  beforeEach(function() {
    var game = new TicTacToe();
  });

  it('gives player a choice of noughts or crosses', function() {
    game.getWeapon('X');
    expect(game.weapon).toEqual('X');
  });
});
