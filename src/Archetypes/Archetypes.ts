import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _name: string;
  private _special: number;
  private _cost: number;
  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  name(): string {
    return this._name;
  }

  special(): number {
    return this._special;
  }

  cost(): number {
    return this._cost;
  }
}