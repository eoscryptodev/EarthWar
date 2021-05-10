import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloaderModule } from './Preload/preload.module';
import {VerifyEmailComponent} from "./Login/Verify/components/verify-email/verify-email.component";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/preloader' },
  { path: 'preloader',
    loadChildren: () => import('../app/Preload/preload.module').then(m => m.PreloaderModule) },
  { path: 'login',
    loadChildren: () => import('../app/Login/login.module').then(m => m.LoginModule) },
  { path: 'title',
    loadChildren: () => import('../app/Title/title.module').then(m => m.TitleModule) },
  { path: 'characterbuild',
    loadChildren: () => import('../app/Character-Creation/character-creation.module').then(m => m.CharacterCreationModule)},
  { path: 'email-verification', component: VerifyEmailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    PreloaderModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
