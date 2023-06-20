import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _enemy: Fighter;
  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._player = player;
    this._enemy = enemy;
  }

  get players(): Fighter {
    return this._player;
  }

  get enemy(): Fighter {
    return this._enemy;
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this._player.attack(this._enemy);
      this._enemy.attack(this._player);
    }
    return super.fight();
  }
}
