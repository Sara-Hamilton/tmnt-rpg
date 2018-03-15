export class Game {
  constructor (players, scores, lives, enemies, bosses) {
    this.players = players;
    this.scores = scores;
    this.lives = lives;
    this.enemies = enemies;
    this.bosses = bosses;
    this.level = 1;
  }

  gameOverCheck(playerNum) {
    if (this.lives[playerNum - 1] === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  gameWinCheck(playerNum) {
    if ((this.level === 3) && (this.bosses[playerNum - 1] === 1)) {
      return true;
    } else {
      return false;
    }
  }

  // level up

  // enemy defeat count
  // time to fight boss
}
