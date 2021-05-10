import { Injectable } from '@angular/core';
import { FactionBuilder } from '../../Shared/builder';

@Injectable({
  providedIn: 'root'
})
export class FactionBuilderService {

  PeaceOrder = FactionBuilder.create({
    factionName: '',
    factionLeader: '',
    factionLocation: ''
  });

  WarOrder = FactionBuilder.create({
    factionName: '',
    factionLeader: '',
    factionLocation: ''
  });

  constructor()
  {

  }
}
