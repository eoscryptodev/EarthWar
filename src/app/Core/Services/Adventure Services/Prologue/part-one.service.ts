import { Injectable } from '@angular/core';
import { ChapterOneService } from './chapter-one.service';
import { AdventureChapterBuilder } from '../../../../Shared/builder';
// import {  } from '';

@Injectable({
  providedIn: 'root'
})
export class PartOneService
{


  constructor( private chapter: ChapterOneService )
  {

  }

}
