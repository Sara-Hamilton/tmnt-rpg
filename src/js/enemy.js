export class Enemy {
  constructor(health) {
    this.health = health;
  }

  attackedByTurtle() {
    this.health -= 1;
  }

}
