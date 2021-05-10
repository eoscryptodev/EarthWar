import { AdventurePageBuilder } from '../../../../../Shared/builder';
import { Injectable } from "@angular/core";
import {LocationsService} from "../locations-service";
import {CharacterBuilderService} from "../../../characterBuilder.service";
import {DecisionsService} from "../decisions.service";

@Injectable({
  providedIn: 'root'
})
export class PageBuilder
{
  PageOne = AdventurePageBuilder.create({
  name: this.location.shipLev1Sec1.area,
  location: this.location.getLocation(),
  character: this.character.getName(),
  storyText: this.pageOneStory(),
  descriptors: this.pageOneDesc(),
  decisionEvents: this.decisions.getDecisionType()
});
  PageTwo = AdventurePageBuilder.create({
    name: 'Jon',
    location: this.location.getShipTwo(),
    character: this.character.Krellen,
    storyText: this.pageTwoStory(),
    descriptors: this.pageTwoDesc(),
    decisionEvents: this.decisions.common1()
  });
  constructor(
    private location: LocationsService,
    private character: CharacterBuilderService,
    private decisions: DecisionsService)
  {

  }
  /***************************************/
  /****************PAGE ONE**************/
  /***************************************/
  getPageOne(): any
  {
    const { name, location, character, storyText, descriptors, decisionEvents } = this.PageOne;
    return `Name: ${name}, Location: ${location}, Character: ${character}, Story: ${storyText},
    Descriptors: ${descriptors}, Decisions: ${decisionEvents}`;
  }

  pageOneStory(): any
  {
    return `${this.location.shipLev1Sec1.area} was dark was dreary. Much to ${this.character.getName()}'s dismay`;
  }
  pageOneDesc(): any
  {
    // See if character carries any items with descriptions. Guns, armor, ect.
    return 'Description Goes Here!';
  }
  /***************************************/
  /****************PAGE TWO***************/
  /***************************************/

  getPageTwo(): any
  {
    const { name, location, character, storyText, descriptors, decisionEvents } = this.PageTwo;
    return `Name: ${name}, Location: ${location}, Character: ${character}, Story: ${storyText},
    Descriptors: ${descriptors}, Decisions: ${decisionEvents}`;
  }

  pageTwoStory(): string
  {
    return `${this.location.shipLev1Sec2.area} was dark was dreary. Much to ${this.character.getName()}'s dismay`;
  }
  pageTwoDesc(): any
  {
    // See if character carries any items with descriptions. Guns, armor, ect.
  }
}

