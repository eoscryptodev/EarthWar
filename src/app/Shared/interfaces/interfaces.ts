import { KeyAbility, DecisionType } from '../../Core/Gameplay/structs';

// Global State Interfaces

/**
 * Boot Parameters for the Game
 */
export interface BootState {
  config: ConfigState;
  player: PlayerState;
}
/**
 * Configuration Parameters for the Game
 */
export interface ConfigState {
  config: Config;
}
/**
 * Player Parameters for the Game
 */
export interface PlayerState {
  players: Player[];
  loggedIn: boolean;
}
/**
 * Character Parameters for the Game
 */
export interface CharacterState {
  player: Player;
  character: Character;
  active: boolean;
}
/**
 * Title Parameters for the Game
 */
export interface TitleState {
  currentPlayer: PlayerState;
}
/**
 * Game Parameters for Earth War
 */
export interface GameState {
  activeCharacter: CharacterState;
  currentChapter: AdventureChapters;
  currentPage: AdventurePage;
}

// Non-State Interfaces

export interface GameConfig {
  title: string;
  version: number;
  type: any;
  width: number;
  height: number;
}

export interface Player {
  accountName: string;
  characters: string[];
  stats: PlayerStats[];
}

export interface Character {
  name: string;
  level: number;
  history: string;
  profession: any;
  archetype: string;
  race: string;
  strength?: number;
  intelligence?: number;
  social?: number;
  agility?: number;
  wisdom?: number;
  vitality?: number;
  faction?: any;
  alignment?: string;
  weaponsHolding?: Weapons[];
  armorWearing?: Armor[];
  battledFought?: any;
}

export interface PlayerClass {
  name: string;
  healthPoints: number;
  armorProficiency: string;
  weaponProficiency: string;
  skillRank: number;
  keyAbility: KeyAbility;
}


export interface PlayerStats {
  totalKills: number;
  highestLevel: number;
  shipsOwned: number;
  totalTokens: number;    // total tokens accumulated ever
  currentTokens: number;  // total tokens - tokens transferred to a wallet
  charactersCreated: number; // total number of characters created, not the same as the list of characters created on the Player interface
}

export interface Faction {
  factionName: string;
  factionLeader: string;
  factionLocation: string;
}

/**
 * THE ADVENTURE PAGE OBJECT
 * - Individual UI Pages That Display a single AP object
 * - Can contain Decision Event, Hidden Items Objects
 * - The smallest of story objects
 */
export interface AdventurePage {
  name: string;
  location: Locations;
  character: Character;
  storyText: string;
  descriptors?: Descriptor; // General descriptor object
  decisionEvents: DecisionEvents;
  hiddenItems?: boolean;
  enemies?: Character;
}
/**
 * THE ADVENTURE CHAPTERS OBJECT
 * - Adventure Page objects make up Chapters
 * - Second smallest of story objects
 */
export interface AdventureChapters {
  chapterTitle: string;
  firstPage: AdventurePage;
  previousPage: AdventurePage;
  currentPage: AdventurePage;
  nextPage: AdventurePage;
  lastPage: AdventurePage;
  canProceed: boolean;
}
/**
 * THE ADVENTURE PARTS OBJECT
 * - Made up of Chapter Objects
 * - Represents Acts 1-3 in the traditional sense
 * - The second largest of story objects
 */
export interface AdventureParts {
  firstChapter: AdventureChapters;
  previousChapter: AdventureChapters;
  currentChapter: AdventureChapters;
  nextChapter: AdventureChapters;
  lastChapter: AdventureChapters;
}
/**
 *  THE ADVENTURE OBJECT
 *  - An entire Adventure and all of it's complex elements
 *  - Contains every facet and detail of the player's adventure
 *  - The largest of story objects
 */
export interface Adventure {
  title?: string;
  firstPart?: AdventureParts;
  previousPart?: AdventureParts;
  currentPart?: AdventureParts;
  nextPart?: AdventureParts;
  lastPart?: AdventureParts;
}

export interface Locations {
  area: string;
  level?: number;
  section: number;
}
/**
 *  THE DECISION OBJECT
 *  - Decision Type: Common, Uncommon, Serious, Major
 *  - Agenda Score: Common = 1, Uncommon = 5, Serious = 10, Major = 15
 *  - Current Page: The text in the game that holds this decision.
 *  - Next Page: The page that appears due to the decision
 */
export interface DecisionEvents {
  decisionType: DecisionType;
  agendaScore: DecisionType;
  agendaImpact: string;
  currentPage?: AdventurePage;
  nextPage?: AdventurePage;
}
/**
 *  THE DESCRIPTOR OBJECT
 *  - A general descriptor object
 *  - Can be used to describe Player objects dynamically
 */
export interface Descriptor {
  type: string; // what type of character item is being described?
  describedAs: string;
  character: Character;
}
/**
 *  THE DIALOGUE TREE OBJECT
 *  - Represents the root node-beginning-of a new dialogue tree
 */
export interface DialogueTree {
  id: number;
  dialogue: string;
  getDecision(): DecisionEvents;
  getLevel();
  iterator?: Iterator;
  addDialogueNode();
  deleteDialogueNode();
}
/**
 *  THE HISTORY OBJECT
 *  - An object that defines a characters history
 */
export interface History {
  history: string;
  description: string;
  fameOne: string;
  fameTwo: string;
  fameThree: string;
}


export interface LinkedNode {
  data: any;
  nextNode: any;
}

export interface  LinkedList {
  head: any;
  size: number;
}

export interface Store {
  nft: number;
  tokens: number;
}

export interface Config {
  adminPermissions: boolean;
  adminName: string;
}

export interface Weapons {
  name: string;
  description: string;
  levelLimit?: number;
  weaponType?: any;
  tokenCost?: number;
  damage?: any;
  criticalHit?: number;
  cartridgeCapacity?: number;
  usage?: number; // representative of wear and tear. How often can this weapon be used before it's ineffective?
  properties?: any;
  weight?: number;
  range?: number;
}

export interface Armor {
  name: string;
  description: string;
  manufacturer?: string;
  levelLimit?: number;
  tokenCost?: number;
  armorProficiency?: string;
  EAVBonus?: number;
  KAVBonus?: number;
  upgradeSlots?: number;
  weight?: number;
  armorPenalty?: number;
  speedAdjustment?: number;
}

export interface Preloader {
  image: string;
}

export interface Text {
  text: string;
}

export interface Iterator {

  next(): any;
  hasNext(): boolean;
}

export interface Aggregator {
  createIterator(): Iterator;
}

export interface formUpdate {
  Render(): any;
  onSelect(): any;
}

export interface Archetype {
  class: string;
  history: string
}
