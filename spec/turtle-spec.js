import { Turtle } from './../src/js/turtle.js';

describe('Turtle', function() {
  let reusableTurtle;
  let anotherTurtle;

  beforeEach(function() {
    reusableTurtle = new Turtle("Raphael", 4, 4, 3);
    anotherTurtle = new Turtle("Donatello", 4, 4, 3);
  });

  it('will increase the health by 1', function() {
    reusableTurtle.eatPizza();
    expect(reusableTurtle.health).toEqual(7);
  });

  it('will decrease the health by 1 for player and 2 for teammate', function() {
    reusableTurtle.attack(anotherTurtle);
    expect(reusableTurtle.health).toEqual(5);
    expect(anotherTurtle.health).toEqual(4);
  });

  it('will increase power by 1 if the score is greater than or equal to 100', function() {
    this.score = 101
    this.power = 3
    reusableTurtle.powerUp(101);
    console.log(this.power);
    expect(reusableTurtle.powerUp).toEqual(4);
  });
});
