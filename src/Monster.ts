import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (this.lifePoints - attackPoints < 1) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    this._lifePoints -= attackPoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): number {
    return enemy.receiveDamage(this.strength);
  }
}
