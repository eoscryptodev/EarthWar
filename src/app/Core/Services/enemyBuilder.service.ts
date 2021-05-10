import { CharacterBuilder, ArmorBuilder, WeaponsBuilder } from "../../Shared/builder";
import {Injectable} from "@angular/core";


export const enemyBuilder: CharacterBuilder =
  [
    {
      armorGuardsman: CharacterBuilder.create({
        name: 'Armor Guardsman',
        level: 1,
        history: 'Soldier',
        profession: 'Mechanaut',
        archetype: 'Arc Titan',
        race: 'Human',
        weaponsHolding: [ WeaponsBuilder.create({
          name: 'MX-22',
          description: 'Standard issue weapon from Martian X Blasters'
        })],
        armorWearing: [ ArmorBuilder.create({
          name: 'Martian Vale Armor',
          description: 'Lowest-tier Martian metallic armor'
        })]
      })
    },

    {
      eliteArmorGuardsman: CharacterBuilder.create({
        name: 'Elite Armor Guardsman',
        level: 3,
        history: 'Soldier',
        profession: 'Mechanaut',
        archetype: 'Arc Titan',
        race: 'Human'
      })
    }
  ]

