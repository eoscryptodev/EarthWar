import {
  Character,
  PlayerClass,
  PlayerStats,
  Player,
  Faction,
  Weapons,
  Armor,
  Preloader,
  Text,
  AdventurePage,
  AdventureChapters,
  AdventureParts,
  Adventure,
  Locations,
  DecisionEvents,
  LinkedNode,
  LinkedList,
  History,
  Archetype
} from './interfaces/interfaces';

export class PlayerBuilder {
  static create( build: Player ) {
    return {
      accountName: build.accountName,
      characters: build.characters,
      stats: build.stats,
    };
  }
}

export class CharacterBuilder {
  static create( build: Character ) {
    return {
      name: build.name,
      level: build.level,
      history: build.history,
      profession: build.profession,
      archetype: build.archetype,
      race: build.race,
      strength: build.strength,
      intelligence: build.intelligence = 10,
      social: build.social,
      agility: build.agility,
      wisdom: build.wisdom,
      vitality: build.vitality,
      faction: build.faction,
      alignment: build.alignment,
      weaponsHolding: build.weaponsHolding,
      armorWearing: build.armorWearing,
      battledFought: build.battledFought
    };
  }
}

export class ProfessionBuilder {
  static create( build: PlayerClass ){
    return {
      name: build.name,
      healthPoints: build.healthPoints,
      armorProficiency: build.armorProficiency,
      weaponProficiency: build.weaponProficiency,
      skillRank: build.skillRank,
      keyAbility: build.keyAbility
    };
  }
}

export class StatsBuilder {
  static create( build: PlayerStats ){
    return {
      totalKills: build.totalKills,
      highestLevel: build.highestLevel,
      shipsOwned: build.shipsOwned,
      totalTokens: build.totalTokens,
      currentTokens: build.currentTokens,
      charactersCreated: build.charactersCreated
    };
  }
}

export class FactionBuilder {
  static create( build: Faction ) {
    return {
      factionName: build.factionName,
      factionLeader: build.factionLeader,
      factionLocation: build.factionLocation
    };
  }
}

export class WeaponsBuilder {
  static create( build: Weapons ) {
    return {
      name: build.name,
      description: build.description,
      levelLimit: build.levelLimit,
      weaponType: build.weaponType,
      tokenCost: build.tokenCost,
      damage: build.damage,
      criticalHit: build.criticalHit,
      cartridgeCapacity: build.cartridgeCapacity,
      usage: build.usage,
      properties: build.properties,
      weight: build.weight,
      range: build.range
    };
  }
}

export class ArmorBuilder {
  static create( build: Armor ) {
    return {
      name: build.name,
      description: build.description,
      manufacturer: build.manufacturer,
      levelLimit: build.levelLimit,
      tokenCost: build.tokenCost,
      armorProficiency: build.armorProficiency,
      EAVBonus: build.EAVBonus,
      KAVBonus: build.KAVBonus,
      upgradeSlots: build.upgradeSlots,
      weight: build.weight,
      armorPenalty: build.armorPenalty,
      speedAdjustment: build.speedAdjustment
    };
  }
}

export class PreloaderBuilder {
  static create( build: Preloader ) {
    return {
      image: build.image
    };
  }
}

export class TextBuilder {
  static create( build: Text ) {
    return {
      text: build.text
    };
  }
}

export class DecisionBuilder {
  static create( build: DecisionEvents ) {
    return {
      decisionType: build.decisionType,
      agendaScore: build.agendaScore,
      agendaImpact: build.agendaImpact,
      currentPage: build.currentPage,
      nextPage: build.nextPage
    };
  }
}

export class LocationBuilder {
  static create( build: Locations ) {
    return {
      area: build.area,
      level: build.level,
      section: build.section
    };
  }
}

export class AdventurePageBuilder {
  static create( build: AdventurePage ) {
    return {
      name: build.name,
      location: build.location,
      character: build.character,
      storyText: build.storyText,
      descriptors: build.descriptors,
      decisionEvents: build.decisionEvents,
      hiddenItems: build.hiddenItems,
      enemies: build.enemies
    };
  }
}

export class AdventureChapterBuilder {
  static create( build: AdventureChapters ) {
    return {
      chapterTitle: build.chapterTitle,
      first: build.firstPage,
      previous: build.previousPage,
      current: build.currentPage,
      next: build.nextPage,
      last: build.lastPage,
      canProceed: build.canProceed
    };
  }
}

export class AdventurePartBuilder {
  static create( build: AdventureParts ) {
    return {
      first: build.firstChapter,
      previous: build.previousChapter,
      current: build.currentChapter,
      next: build.nextChapter,
      last: build.lastChapter
    };
  }
}

export class AdventureBuilder {
  static create( build: Adventure )
  {
    return {
      title: build.title,
      first: build.firstPart,
      previous: build.previousPart,
      current: build.currentPart,
      next: build.nextPart,
      last: build.lastPart
    };
  }
}

export class ListBuilder {
  static node( build: LinkedNode ) {
    return {
      data: build.data,
      nextNode: build.nextNode
    };
  }
  static linkedList( build: LinkedList ) {
    return {
      head: build.head,
      size: build.size = 0
    };
  }
}

export class HistoryBuilder {
  static create( build: History )
  {
    return {
      history: build.history,
      description: build.description,
      fameOne: build.fameOne,
      fameTwo: build.fameTwo,
      fameThree: build.fameThree
    }
  }
}

export class ArchetypeBuilder {
  static create( build: Archetype )
  {
    return {
      class: build.class,
      history: build.history
    }
  }
}
