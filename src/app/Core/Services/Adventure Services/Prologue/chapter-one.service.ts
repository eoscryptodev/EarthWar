import {Injectable} from '@angular/core';
import {
  AdventureChapterBuilder,
  AdventurePageBuilder, CharacterBuilder,
  DecisionBuilder,
  LocationBuilder
} from '../../../../Shared/builder';
import {AdventurePage, DecisionEvents} from "../../../../Shared/interfaces/interfaces";
import {DecisionType} from "../../../Gameplay/structs";
import {LocationsService} from "./locations-service";
import {CharacterBuilderService} from "../../characterBuilder.service";
import {DecisionsService} from "./decisions.service";


@Injectable({
  providedIn: 'root'
})
/**
 *  CHAPTER ONE
 *  - Chapter Service that contains all Page objects
 *  - Each Chapter component accesses this one service for all content
 */
export class PageService implements AdventurePage
{
  name: string = '';
  location: any;
  character: any;
  storyText: string = '';
  descriptors: any;
  decisionEvents: any;

  constructor()
  {

  }

  getName( name: string ): string
  {
    return `The name of this page is ${name}`;
  }

  getLocation(): LocationBuilder
  {
    let loc = LocationBuilder.create({
      area: 'Bridge',
      level: 1,
      section: 2
    })
    this.location = loc.area;
    return `You are located inside ${this.location}`;
  }

  getCharacters(): CharacterBuilder
  {
    let char = CharacterBuilder.create({
      name: '',
      level: 1,
      history: '',
      profession: '',
      archetype: '',
      race: '',
      strength: 2,
      intelligence: 5,
      social: 3,
      vitality: 5,
      agility: 2,
      wisdom: 7,
      faction: ''
    })
    this.character = char.name
    return `Your character's name is ${this.character}`
  }

  getStoryEvents()
  {

  }

  getDescriptors()
  {

  }

  getDecisionEvents()
  {

  }


}




@Injectable({
  providedIn: 'root'
})

export class ChapterOneService implements AdventurePage
{
  private pages: AdventurePage[] = [];

  name: string = '';
  location: any;
  character: any;
  storyText: string = '';
  descriptors: any;
  decisionEvents: any;

  constructor(name: string, location: any, character: any, storyText: string, descriptors: any, decisionEvents: any,
              private loc: LocationsService,
              private char: CharacterBuilderService,
              private decisions: DecisionsService)
  {
    this.name = name;
    this.location = location;
    this.character = character;
    this.storyText = storyText;
    this.descriptors = descriptors;
    this.decisionEvents = decisionEvents;
    this.pages = [];

  }

  addPage( newPage: AdventurePage ): void
  {
    this.pages.push( newPage );
  }

  deletePage( pageNumber: number ): void
  {
    if (this.pages.length <= pageNumber)
    {
      throw new Error("Index is out of bounds")
    }
    this.pages.splice( pageNumber, 1 );
  }

  nextPage()
  {
    // Go to
  }

}


