import { Turtle } from './../src/js/turtle.js';

describe('Turtle', function() {
  let reusableTurtle;
  let anotherTurtle;

  beforeEach(function() {
    reusableTurtle = new Turtle("Raphael", "sai", 4, 4, 3);
    anotherTurtle = new Turtle("Donatello", "bo", 4, 4, 3);
  });

  it('will increase the health by 1', function() {
    reusableTurtle.eatPizza();
    expect(reusableTurtle.health).toEqual(7);
  });

  it('will increase the power by 1', function() {
    reusableTurtle.getDumbbell();
    expect(reusableTurtle.power).toEqual(5);
  });

  it('will increase the speed by 1', function() {
    reusableTurtle.getShoes();
    expect(reusableTurtle.speed).toEqual(5);
  });

  it('will increase the recovery by 1', function() {
    reusableTurtle.getEnergyDrink();
    expect(reusableTurtle.recovery).toEqual(4);
  });

  it('will decrease the health by 1 for player and 2 for teammate', function() {
    reusableTurtle.attackTurtle(anotherTurtle);
    expect(reusableTurtle.health).toEqual(5);
    expect(anotherTurtle.health).toEqual(4);
  });

  it('will increase power by 1 if the score is greater than or equal to 100', function() {
    reusableTurtle.score = 101;
    reusableTurtle.powerUp();
    expect(reusableTurtle.power).toEqual(5);
  });

  it('will increase score by 10 points for every hit on an enemy/boss', function() {
    reusableTurtle.score = 20;
    reusableTurtle.attackEnemy();
    expect(reusableTurtle.score).toEqual(30);
  });

  it('will decrease power, speed, and recovery by 0.5 for every third attack on an enemy/boss', function() {
    reusableTurtle.attackEnemy();
    expect(reusableTurtle.power).toEqual(4);
    expect(reusableTurtle.speed).toEqual(4);
    expect(reusableTurtle.recovery).toEqual(3);
    reusableTurtle.attackEnemy();
    expect(reusableTurtle.power).toEqual(4);
    expect(reusableTurtle.speed).toEqual(4);
    expect(reusableTurtle.recovery).toEqual(3);
    reusableTurtle.attackEnemy();
    expect(reusableTurtle.power).toEqual(3.5);
    expect(reusableTurtle.speed).toEqual(3.5);
    expect(reusableTurtle.recovery).toEqual(2.5);
    reusableTurtle.attackEnemy();
    expect(reusableTurtle.power).toEqual(3.5);
    expect(reusableTurtle.speed).toEqual(3.5);
    expect(reusableTurtle.recovery).toEqual(2.5);
  });

  it('will decrease health by 0.5 if recovery >= 10', function() {
    reusableTurtle.recovery = 10;
    reusableTurtle.attackedByEnemy();
    expect(reusableTurtle.health).toEqual(5.5);
  });

  it('will decrease health by 1 if recovery < 10', function() {
    reusableTurtle.attackedByEnemy();
    expect(reusableTurtle.health).toEqual(5);
  });

});
