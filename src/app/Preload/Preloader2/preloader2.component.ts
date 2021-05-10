import { Component, Input, OnInit } from '@angular/core';
import { PreloaderService } from '../../Core/Services/preloader.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

/* Duplicate Code. At some point create a shared file to place this in and import it
*  into Preloader 1 and Preloader 2 and anywhere else where we need these fade transition
*/
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
  selector: 'app-preloader2',
  templateUrl: './preloader2.component.html',
  styleUrls: ['./preloader2.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class Preloader2Component implements OnInit
{
  @Input() image;

  constructor( private imageTwo: PreloaderService, private router: Router)
  {

  }

  ngOnInit(): void
  {
    this.image = this.imageTwo.getPreloadImage2();
    console.log( 'Preloader Two Loaded!' );
    this.pageTransition();
  }

  displayImageTwo(): string
  {
    return this.image;
  }

  pageTransition()
  {
    setTimeout(() => {
      this.router.navigate(['login']);
      //this.router.navigateByUrl("/login");
    }, 5000);
  }

}
