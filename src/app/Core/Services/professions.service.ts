import { Injectable } from '@angular/core';
import { ProfessionBuilder } from '../../Shared/builder';
import { KeyAbility } from '../Gameplay/structs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {

  // All of the initial stats for each Profession in Earth War.

  Warlord = ProfessionBuilder.create({
    name: 'Warlord',
    healthPoints: 9,
    armorProficiency: 'Heavy',
    weaponProficiency: 'Big Guns',
    skillRank: 7,
    keyAbility: KeyAbility.Warlord
  });

  private Commander = ProfessionBuilder.create({
    name: 'Commander',
    healthPoints: 7,
    armorProficiency: 'Medium',
    weaponProficiency: 'Light or Heavy',
    skillRank: 6,
    keyAbility: KeyAbility.Commander
  });

  Spy = ProfessionBuilder.create({
    name: 'Spy',
    healthPoints: 7,
    armorProficiency: 'Medium',
    weaponProficiency: 'Light or Heavy',
    skillRank: 6,
    keyAbility: KeyAbility.Spy
  });

  Aetherist = ProfessionBuilder.create({
    name: 'Aetherist',
    healthPoints: 7,
    armorProficiency: 'Medium',
    weaponProficiency: 'Light or Heavy',
    skillRank: 6,
    keyAbility: KeyAbility.Aetherist
  });

  Mechanaut = ProfessionBuilder.create({
    name: 'Mechanaut',
    healthPoints: 7,
    armorProficiency: 'Medium',
    weaponProficiency: 'Light or Heavy',
    skillRank: 6,
    keyAbility: KeyAbility.Mechanaut
  });

  Alchemist = ProfessionBuilder.create({
    name: 'Alchemist',
    healthPoints: 7,
    armorProficiency: 'Medium',
    weaponProficiency: 'Light or Heavy',
    skillRank: 6,
    keyAbility: KeyAbility.Alchemist
  });

  constructor()
  {

  }
  commander()
  {
    // Destructing an object
    const { name, keyAbility, ...Alchemist } = this.Alchemist;
    console.log( name );
    console.log( keyAbility );
    console.log(Alchemist);

    return this.Commander;
  }
}
