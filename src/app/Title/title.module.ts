import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from '../Core/Services/title.service';
import { TitleComponent } from "./title.component";
import { TitleRoutingModule } from "./title-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { HeaderComponent } from "../Header/header.component";


@NgModule({
  imports: [
    TitleRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    TitleComponent,
    HeaderComponent
  ],
  providers: [ TitleService ]
})
export class TitleModule { }
