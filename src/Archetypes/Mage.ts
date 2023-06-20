import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }
}

export default Mage;
