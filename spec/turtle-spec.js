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

});
