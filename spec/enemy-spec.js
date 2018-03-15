import { Enemy } from './../src/js/enemy.js';

describe('Enemy', function() {
  let reusableEnemy;

  beforeEach(function() {
    reusableEnemy = new Enemy (6);
  });

  it('will diminish enemy health by 1', function() {
    reusableEnemy.attackedByTurtle(1);
    expect(reusableEnemy.health).toEqual(5);
  });

});
