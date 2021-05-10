import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameMechanicsService {

  constructor()
  {

  }
  /**
   * Determines how well the character is at attacking
   * BAB = Base Attack Bonus which is class-dependent
   * WB = Weapon Bonus. Either melee, thrown, or ranged.
   * SM = Strength Modifier
   * DM = Dexterity Modifier
   */
  attackBonus( bab: number, wb: number, sm?: number, dm?: number ): number
  {
    // For melee and thrown weapons. AB = Base Attack Bonus + Strength Modifier + Weapon Bonus

    // For ranged weapons. AB = Base Attack Bonus + Dexterity Modifier + Weapon Bonus

    return 0;
  }

  /**
   * Determines which character attacks first
   - DEX = Dexterity Modifier
   - Feat = Feat skills if applicable
   - Ability = Any ability that applies a bonus to initiative
   */
  Initiative( dex: number, feat?, ability? ): number
  {
    // Initiative = Dexterity Modifier + Bonuses from Feats or Abilities that impact Initiative.

    return 0;
  }

  /**
   * Determines how hard it is to hit the character
   - Armor = any piece of armor being worn
   - EAV = Energetic Armor Value
   - KAV = Kinetic Armor Value
   */
  totalArmorValue( Armor, EAV, KAV ): number
  {
    return 0;
  }

  /**
   * Determines ability to avoid injury when hit by energy weapons such as lasers.
   */
  energeticArmorValue(): number
  {
    // EAV = 10 by default + Dexterity Modifier + EAV bonus for that piece of armor being worn.

    return 0;

  }

  /**
   * Determines ability to avoid injury when hit by physical weapons such as bullets, clubs, etc.
   */
  kineticArmorValue(): number
  {
    // KAV = 10 by default + Dexterity Modifier + EAV bonus for that piece of armor being worn.

    // When attacked by combat maneuvers is KAV + 8

    return 0;

  }
}
