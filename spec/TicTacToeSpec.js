'use strict';

describe('game', function() {
  var game

  beforeEach(function() {
    game = new TicTacToe();
  });

  it('gives player a choice of noughts or crosses to play', function() {
    expect(game.weaponChoice).toEqual(['O', 'X'])
  });
});
