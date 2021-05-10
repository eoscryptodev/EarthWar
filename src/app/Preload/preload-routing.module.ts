import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloaderComponent } from './Preloader/preloader.component';
import { Preloader2Component } from './Preloader2/preloader2.component';

const routes: Routes = [
  { path: '', component: PreloaderComponent },
  { path: 'preloaderTwo', component: Preloader2Component }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PreloaderRoutingModule {}
