import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private opponents: Array<SimpleFighter | Fighter>;

  constructor(player: Fighter, opponents: Array<SimpleFighter | Fighter>) {
    super(player);
    this.opponents = opponents;
  }

  fight(): number {
    const playerOne = this.player;
    while (playerOne.lifePoints >= 0) {
      playerOne.attack(this.opponents[0]);
      if (this.opponents[0].lifePoints === -1) {
        this.opponents.shift();
      }
      if (!this.opponents.length) {
        return 1;
      }
      this.opponents.forEach((opponent) => {
        opponent.attack(playerOne);
      });
    }
    return -1;
  }
}
