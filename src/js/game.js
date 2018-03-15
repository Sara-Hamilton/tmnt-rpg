export class Game {
  constructor (players, scores, lives, level = 1) {
    this.players = players;
    this.scores = scores;
    this.lives = lives;
    this.level = level;
  }

  gameOverCheck(playerNum) {
    if (this.lives[playerNum - 1] === 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
