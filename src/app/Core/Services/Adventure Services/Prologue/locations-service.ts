import { Injectable } from '@angular/core';
import { LocationBuilder } from '../../../../Shared/builder';
import { forwardRef, Inject } from '@nestjs/common';
import { ChapterOneService } from './chapter-one.service';


@Injectable({
  providedIn: 'root'
})
export class LocationsService
{
  shipLev1Sec1 = LocationBuilder.create({
    area: 'The Holodeck',
    level: 1,
    section: 1
  });

  shipLev1Sec2 = LocationBuilder.create({
    area: 'The Bridge',
    level: 1,
    section: 2
  });

  shipLev1Sec3 = LocationBuilder.create({
    area: 'The Infirmary',
    level: 1,
    section: 3
  });


  constructor()
  {

  }

  getAreaName(): any
  {
    const { area } = this.shipLev1Sec1;
    return area;
  }
  getLocation(): any
  {
    const { section, level } = this.shipLev1Sec1
    return `Level: ${level}, Section: ${section}`;
  }

  getShipTwo(): any
  {
    return this.shipLev1Sec2;
  }
}
