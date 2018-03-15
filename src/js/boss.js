export class Boss {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  attackedByTurtle() {
    this.health -= 1;
  }

}
