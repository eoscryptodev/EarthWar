import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PreloaderService } from '../../Core/Services/preloader.service';

import {ChapterOneService } from '../../Core/Services/Adventure Services/Prologue/chapter-one.service';
import { ProfessionsService } from '../../Core/Services/professions.service';
import { CharacterBuilderService } from "../../Core/Services/characterBuilder.service";
import { LocationsService } from "../../Core/Services/Adventure Services/Prologue/locations-service";
import { DecisionsService } from "../../Core/Services/Adventure Services/Prologue/decisions.service";
import { PageBuilder } from "../../Core/Services/Adventure Services/Prologue/pro-page-one/prologue-service";
import { AdventurePageBuilder } from "../../Shared/builder";
import { animate, style, transition, trigger } from "@angular/animations";

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

  constructor(
    private preload: PreloaderService,
    private router: Router,
    private sim: ProfessionsService,
    private char: CharacterBuilderService,
    private prologue: PageBuilder) {

  }

  ngOnInit(): void {
    this.image = this.preload.getPreloadImage();
    console.log(`Are you an ${this.sim.Aetherist.name} or an ${this.sim.Alchemist.name}? I'd
    like to know so I can alert the team.`);
    console.table(this.prologue.PageOne);
    console.log('Preloader 1 Loaded!');
    this.pageTransition();
  }

  ngOnDestroy() {

  }

  displayImage(): string {
    return this.image;
  }

  pageTransition(): void
  {
    setTimeout(() => {
      this.router.navigate(['preloaderTwo']);;
    }, 5000);
  }
}



