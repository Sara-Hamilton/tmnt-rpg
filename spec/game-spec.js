import { Game } from './../src/js/game.js';

describe('Game', function() {
  let reusableGame;

  beforeEach(function() {
    reusableGame = new Game([1,2,3], [0,0,0], [3,3,3]);
  });

  it('will return false if lives != 0', function() {
    let result = reusableGame.gameOverCheck(1);
    expect(result).toEqual(false);
  });

  it('will return true if lives = 0', function() {
    reusableGame.lives[0] = 0;
    let result = reusableGame.gameOverCheck(1);
    expect(result).toEqual(true);
  });

});
