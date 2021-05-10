import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../Navigation/navbar/navbar.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { AlertComponent } from "./alert/alert.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    NavbarComponent,
    PlaceholderDirective,
    AlertComponent,
  ],
  imports: [
    //MatTooltipModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PlaceholderDirective,
    AlertComponent,
  ]
})
export class SharedModule {}
