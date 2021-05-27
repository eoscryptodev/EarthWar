import { Component, OnInit } from '@angular/core';
import { TitleHandlerState } from "../Core/State Management/Handler States/title-handler.state";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit
{
  titleState = new TitleHandlerState();

  constructor() { }

  ngOnInit(): void
  {
    this.titleState.title();
    console.log('Title Component loaded');
  }

}
