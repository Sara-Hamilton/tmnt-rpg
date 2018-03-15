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

  levelUp(playerNum) {
    if (((this.level === 1) || (this.level === 2)) && (this.bosses[playerNum - 1] === 1)) {
      this.level += 1;
      for (let i = 0; i < this.players.length; i++) {
        this.enemies[i] = 0;
        this.bosses[i] = 0;
      }
    }
  }

  decreaseLife(playerNum) {
    this.lives[playerNum -1] -=1;
  }

  defeatEnemy(playerNum) {
    this.enemies[playerNum -1] += 1;
  }

  fightBossCheck(playerNum) {
    if (this.enemies[playerNum -1] >= this.level * 5 + 5) {
      return true;
    }
    else {
      return false;
    }
  }
}
