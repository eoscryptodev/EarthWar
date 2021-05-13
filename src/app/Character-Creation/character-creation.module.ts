import { NgModule } from '@angular/core';
import { CharacterCreationComponent } from "./character-creation.component";
import { CharacterCreationRoutingModule } from "./character-creation-routing.module";
import { SharedModule } from '../Shared/shared.module'
import { CharacterCreationService } from "./character-creation.service";
import { HistoryDialogComponent } from './dialogs/history-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ClassDialogComponent } from './dialogs/class-dialog/class-dialog.component';
import { HomeworldDialogComponent } from './dialogs/homeworld-dialog/homeworld-dialog.component';
import { SpeciesDialogComponent } from './dialogs/species-dialog/species-dialog.component';


@NgModule({
  imports: [
    CharacterCreationRoutingModule,
    SharedModule,
    MatDialogModule,

  ],
  declarations: [
    CharacterCreationComponent,
    HistoryDialogComponent,
    ClassDialogComponent,
    HomeworldDialogComponent,
    SpeciesDialogComponent
  ],
  providers: [ CharacterCreationService ]
})
export class CharacterCreationModule { }
