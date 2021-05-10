import { Injectable } from "@angular/core";
import { AdventureBuilder } from '../../Shared/builder';
import { AdventureCoreService } from "./adventure-core.service";


@Injectable({
  providedIn: 'root'
})
export class AdventureService
{
  adventureOne: AdventureService[] = [];

  // Add adventures
  constructor( adventureCore: AdventureCoreService )
  {

  }

  adventureTitle( title: any )
  {
    this.adventureOne.push( title );
  }
}
