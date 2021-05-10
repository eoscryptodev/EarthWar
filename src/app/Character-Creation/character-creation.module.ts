import { NgModule } from '@angular/core';
import { CharacterCreationComponent } from "./character-creation.component";
import { CharacterCreationRoutingModule } from "./character-creation-routing.module";
import { SharedModule } from '../Shared/shared.module'
import { CharacterCreationService } from "./character-creation.service";
import { HistoryDialogComponent } from './dialogs/history-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  imports: [
    CharacterCreationRoutingModule,
    SharedModule,
    MatDialogModule,

  ],
  declarations: [
    CharacterCreationComponent,
    HistoryDialogComponent
  ],
  providers: [ CharacterCreationService ]
})
export class CharacterCreationModule { }
