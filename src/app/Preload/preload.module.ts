import { NgModule } from '@angular/core';

import { PreloaderRoutingModule } from './preload-routing.module';
import { PreloaderService } from '../Core/Services/preloader.service';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './Preloader/preloader.component';
import { Preloader2Component } from './Preloader2/preloader2.component';
import { State } from "@ngxs/store";

@NgModule({
  imports: [
    PreloaderRoutingModule,
    CommonModule
  ],
  declarations: [
    PreloaderComponent,
    Preloader2Component
  ],
  providers: [ PreloaderService ]
})
@State<string[]>({
  name: 'PreloadState',
  defaults: []
})
export class PreloaderModule { }
