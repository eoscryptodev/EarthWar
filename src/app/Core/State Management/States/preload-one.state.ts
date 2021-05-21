import { Injectable } from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {Router} from "@angular/router";
import {PreloadOneActions} from '../Action States/preload-one.actions';

export interface Preload {
  url: string;
}

@State<Preload>({
  name: 'preloadOne',
  defaults: {
    url: 'preloadTwo'
  }
})
@Injectable()
export class PreloadState
{
  constructor() {}


}
