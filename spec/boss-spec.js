import { Boss } from './../src/js/boss.js';

describe('Boss', function() {
  let reusableBoss;

  beforeEach(function() {
    reusableBoss = new Boss ("Rocksteady", 8);
  });

  it('will diminish boss health by 1 false if lives != 0', function() {
    reusableBoss.attackedByTurtle(1);
    expect(reusableBoss.health).toEqual(7);
  });

});
