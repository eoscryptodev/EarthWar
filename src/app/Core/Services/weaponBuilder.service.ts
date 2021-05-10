import { Injectable } from '@angular/core';
import { WeaponsBuilder } from '../../Shared/builder';

@Injectable({
  providedIn: 'root'
})
export class WeaponBuilderService {

  private solananPlasmaPistol = WeaponsBuilder.create({
    name: 'Solanan Plasma Pistol',
    description: 'A cheap, old-model Solanan pistol',
    levelLimit: 1,
    weaponType: 'Plasma',
    tokenCost: 20,
    damage: 6,
    criticalHit: null,
    cartridgeCapacity: null,
    usage: 50,
    properties: null
  });

  constructor()
  {

  }

  getSolananPistol()
  {
    return `Weapon stats for ${this.solananPlasmaPistol.name}: Damage: ${this.solananPlasmaPistol.damage}, Damage Type: ${this.solananPlasmaPistol.weaponType}`
  }
}
