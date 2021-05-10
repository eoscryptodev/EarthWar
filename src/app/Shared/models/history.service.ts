import { HistoryBuilder } from '../builder'
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CharacterHistory
{

  private spaceExplorer = HistoryBuilder.create({
    history: 'Space Explorer',
    description: 'You travel Free Space on your own terms in search of adventure, wealth and whatever else you can find',
    fameOne: 'You discovered the Triton V, an ancient derelict space vessel from the days of the old ' +
      'Solanan Monarchy owned by the last ruler of Solana - King Kreshna of Novira. In it contained encrypted coordinates and a ' +
      'note that read - "Death to Those Who Enter." Your discovery has ignited an interstellar race to ' +
      'decipher The Lost Journal of King Kreshna.',
    fameTwo: 'Coming Soon',
    fameThree: 'Coming Soon'
  });

  private scientist = HistoryBuilder.create({
    history: 'Scientist',
    description: 'You travel Free Space on your own terms in search of adventure, wealth and whatever else you can find ',
    fameOne: 'Very few can claimed to have lived through a mutant genome attack, but you can because' +
      'you helped discover the multi-disciplinary cure that saved an entire colony on Vira Prime. Believed ' +
      'to have been launched by a shadowy group of Dark Engineers calling themselves "Shadow Nexus," Mutanome ' +
      'attacks will increase across Free Space until you stop Shadow Nexus and their cult of Dark Engineers.',
    fameTwo: 'Coming Soon',
    fameThree: 'Coming Soon'
  });

  private soldier = HistoryBuilder.create({
    history: 'Soldier',
    description: 'You travel Free Space on your own terms in search of adventure, wealth and whatever else you can find ',
    fameOne: 'You cut your teeth at The Battle of Solana under the command of General Tyrus Magna, who was also your mentor. The battle would end ' +
      'his life, but the legacy of General Magna lives on through you - his most decorated pupil. ',
    fameTwo: 'Coming Soon',
    fameThree: 'Coming Soon'
  });

  private hacker = HistoryBuilder.create({
    history: 'Hacker',
    description: 'You travel Free Space on your own terms in search of adventure, wealth and whatever else you can find ',
    fameOne: 'The Martian Troll Cartel is one of the most corrupt, dangerous crime syndicates in Free Space. They corrupt entire planetary ' +
      'governments and control a vast underground intel network that they use for blackmail. You hacked the local cartel ' +
      'database that stored their most precious secrets. You have seen intel that can bring down governments which makes you feared ' +
      'and a target.',
    fameTwo: 'Coming Soon',
    fameThree: 'Coming Soon'
  });

  private pirate = HistoryBuilder.create({
    history: 'Pirate',
    description: 'You travel Free Space on your own terms in search of adventure, wealth and whatever else you can find ',
    fameOne: 'You discovered the lost, derelict Gammelian cruiser worth a million Torries and sold it to the highest bidder - The Order of Thieves. ' +
      'Now every seedy warlord thinks you are their meal ticket. This has made you the most hated Pirate by some and most envied by others',
    fameTwo: 'Coming Soon',
    fameThree: 'Coming Soon'
  });

  constructor()
  {

  }

  getSpaceExplorerFame()
  {
    return this.spaceExplorer.fameOne;
  }

  getScientistFame()
  {
    return this.scientist.fameOne;
  }

  getSoldierFame()
  {
    return this.soldier.fameOne;
  }

  getHackerFame()
  {
    return this.hacker.fameOne;
  }

  getPirateFame()
  {
    return this.pirate.fameOne;
  }


}
