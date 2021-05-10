import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PreloaderModule } from './Preload/preload.module';
import { ProPageOneComponent } from './Core/Services/Adventure Services/Prologue/pro-page-one/pro-page-one.component';
import { SharedModule} from './Shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./Core/core.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PreloaderModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    ProPageOneComponent,
  ],
  providers: [],
  exports: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
