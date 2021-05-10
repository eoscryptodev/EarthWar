import { Injectable } from '@angular/core';
import { ArmorBuilder } from '../../Shared/builder';

@Injectable({
  providedIn: 'root'
})
export class ArmorBuilderService {

  private martianLeather = ArmorBuilder.create({
    name: 'Reinforced Martian Leather',
    description: 'Standard-issue recruit armor',
    manufacturer: 'Red World Technologies',
    levelLimit: 1,
    tokenCost: 0,
    armorProficiency: 'Light',
    EAVBonus: 0,
    KAVBonus: 2,
    upgradeSlots: 0
  });

  private martianPower = ArmorBuilder.create({
    name: 'Martian Power Suit',
    description: 'Standard-issue medium recruit armor',
    manufacturer: 'Red World Technologies',
    levelLimit: 2,
    tokenCost: 40,
    armorProficiency: 'Medium',
    EAVBonus: 1,
    KAVBonus: 3,
    upgradeSlots: 2
  });

  private solananEWeave = ArmorBuilder.create({
    name: 'Solanan Energy Weave',
    description: 'Standard Solanan energy armor',
    manufacturer: 'Shirianan Collective',
    levelLimit: 1,
    tokenCost: 43,
    armorProficiency: 'Heavy',
    EAVBonus: 2,
    KAVBonus: 1,
    upgradeSlots: 0
  });

  private mercanaPower = ArmorBuilder.create({
    name: 'Mercanan Power Armor',
    description: 'Standard Power armor from Earth',
    manufacturer: 'Mercanan Industries',
    levelLimit: 1,
    tokenCost: 50,
    armorProficiency: 'Medium',
    EAVBonus: 3,
    KAVBonus: 0,
    upgradeSlots: 1
  });

  constructor()
  {

  }

  getMartianLeather(): string
  {
    return `Armor stats for ${this.martianLeather.name}: EAV: ${this.martianLeather.EAVBonus}, KAV: ${this.martianLeather.KAVBonus}`;
  }

  getMercananPower(): string
  {
    return `Armor stats for ${this.mercanaPower.name}: EAV: ${this.mercanaPower.EAVBonus}, KAV: ${this.mercanaPower.KAVBonus}`;
  }

  analyzeArmor(): any
  {
    // Function to display Armor details in a popup modal
  }

  claimArmor(): any
  {
    // Function to allow Players to put armor in their inventory
  }
}
