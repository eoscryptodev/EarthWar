import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PreloaderService } from '../../Core/Services/preloader.service';

import { ChapterOneService } from '../../Core/Services/Adventure Services/Prologue/chapter-one.service';
import { ProfessionsService } from '../../Core/Services/professions.service';
import { CharacterBuilderService } from "../../Core/Services/characterBuilder.service";
import { LocationsService } from "../../Core/Services/Adventure Services/Prologue/locations-service";
import { DecisionsService } from "../../Core/Services/Adventure Services/Prologue/decisions.service";
import { PageBuilder } from "../../Core/Services/Adventure Services/Prologue/pro-page-one/prologue-service";
import { AdventurePageBuilder } from "../../Shared/builder";
import { animate, style, transition, trigger } from "@angular/animations";
import { Store } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { Connection } from "@solana/web3.js";

let enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('2s ease-in', style({
    opacity: 1
  }))
]);

let leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('2s ease-out', style({
    opacity: 0
  }))
])

let fadeIn = trigger('fadeIn', [
  enterTransition
]);

let fadeOut = trigger('fadeOut', [
  leaveTrans
]);
@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
  providers: [
    ProfessionsService,
    ChapterOneService,
    CharacterBuilderService,
    LocationsService,
    DecisionsService,
    PageBuilder,
    AdventurePageBuilder
  ],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class PreloaderComponent implements OnInit, OnDestroy {
  //show = false;
  @Input() image;
  characterName: string;
  // @ViewChild('nameInput') nameInputRef: ElementRef;

  datahubUrl: string = 'solana--devnet--rpc.datahub.figment.io';
  devNet: string = 'https://api.devnet.solana.com';
  apiKey: string = 'f4c50ec23a922eb26fc7f15b835bd2ef';

  constructor(
    private preload: PreloaderService,
    private router: Router,
    private store: Store,
    private sim: ProfessionsService,
    private char: CharacterBuilderService,
    private prologue: PageBuilder) {

  }

  ngOnInit(): void {
    this.image = this.preload.getPreloadImage();
    const url = this.connectionCredentials();
    const connected = new Connection( url );
    connected.getVersion()
      .then(version => {
        console.log(version, 'You are connected!');
      })
      .catch(error => console.log(error));

    this.pageTransition();
  }

  ngOnDestroy() {

  }

  connectionCredentials()
  {
    return `https://${this.datahubUrl}/apikey/${this.apiKey}`;
  }

  displayImage(): string {
    return this.image;
  }

  pageTransition(): void
  {
    setTimeout(() => {
      this.store.dispatch( new Navigate(['preloaderTwo']));
    }, 5000);
  }
}



