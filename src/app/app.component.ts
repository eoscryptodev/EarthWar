import { Component } from '@angular/core';
import { GameConfig, Faction, Character } from './Shared/interfaces/interfaces';
import { } from './Preload/Preloader/preloader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Earth War: The Battle for Sola';

  constructor()
  {

  }
}
