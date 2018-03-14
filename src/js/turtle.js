export class Turtle {
  constructor(name, power, speed, recovery) {
    this.name = name;
    this.score = 0;
    this.health = 6;
    this.power = power;
    this.speed = speed;
    this.recovery = recovery;
  }


  eatPizza() {
    this.health += 1;
  }

  attack(turtle) {
    this.health -= 1;
    turtle.health -=2;
  }

  powerUp() {
    if (this.score >= 100) {
      this.power += 1
    }
    return this.power;
  }  
}
