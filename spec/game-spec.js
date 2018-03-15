import { Game } from './../src/js/game.js';

describe('Game', function() {
  let reusableGame;

  beforeEach(function() {
    reusableGame = new Game([1,2,3], [0,0,0], [3,3,3], [0,0,0], [0,0,0]);
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

  it('will return true if level === 3 and bosses === 1', function() {
    reusableGame.level = 3;
    reusableGame.bosses[0] = 1;
    let result = reusableGame.gameWinCheck(1);
    expect(result).toEqual(true);
  });

  it('will increase level by 1 if level === 1 or 2 and bosses === 1', function() {
    reusableGame.bosses[0] = 1;
    reusableGame.levelUp(1);
    expect(reusableGame.level).toEqual(2);
  });

  it('will reset enemies and bosses to 0 for all players', function() {
    reusableGame.bosses[0] = 1;
    reusableGame.bosses[1] = 1;
    reusableGame.bosses[2] = 1;
    reusableGame.enemies[0] = 1;
    reusableGame.enemies[1] = 1;
    reusableGame.enemies[2] = 1;
    expect(reusableGame.enemies[0]).toEqual(1);
    expect(reusableGame.enemies[1]).toEqual(1);
    expect(reusableGame.enemies[2]).toEqual(1);
    expect(reusableGame.bosses[0]).toEqual(1);
    expect(reusableGame.bosses[1]).toEqual(1);
    expect(reusableGame.bosses[2]).toEqual(1);
    reusableGame.levelUp(1);
    expect(reusableGame.enemies[0]).toEqual(0);
    expect(reusableGame.enemies[1]).toEqual(0);
    expect(reusableGame.enemies[2]).toEqual(0);
    expect(reusableGame.bosses[0]).toEqual(0);
    expect(reusableGame.bosses[1]).toEqual(0);
    expect(reusableGame.bosses[2]).toEqual(0);
  });

  it('will decrease life by 1', function() {
    reusableGame.lives[0] = 3;
    reusableGame.decreaseLife(1);
    expect(reusableGame.lives[0]).toEqual(2);
  });

  it('will increase enemies count by 1', function() {
    reusableGame.defeatEnemy(1);
    expect(reusableGame.enemies[0]).toEqual(1);
  });

  it('will return true if level === 1 and enemies === 10', function() {
    reusableGame.enemies[0] = 10;
    let result = reusableGame.fightBossCheck(1);
    expect(result).toEqual(true);
  });

  it('will return true if level === 2 and enemies === 15', function() {
    reusableGame.level = 2;
    reusableGame.enemies[0] = 15;
    let result = reusableGame.fightBossCheck(1);
    expect(result).toEqual(true);
  });

  it('will return true if level === 3 and enemies === 20', function() {
    reusableGame.level = 3;
    reusableGame.enemies[0] = 20;
    let result = reusableGame.fightBossCheck(1);
    expect(result).toEqual(true);
  });

});
