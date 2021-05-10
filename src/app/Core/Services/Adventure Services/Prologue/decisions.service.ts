import { Injectable } from '@angular/core';
import { DecisionBuilder } from '../../../../Shared/builder';
import { DecisionType } from '../../../Gameplay/structs';
import { ChapterOneService } from './chapter-one.service';
import { forwardRef, Inject } from '@nestjs/common';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService
{
  common1(): any
  {
    let commonOne;
    commonOne = DecisionBuilder.create({
      decisionType: DecisionType.Common,
      agendaScore: DecisionType.Common.valueOf(),
      agendaImpact: 'Moderate',
      // currentPage: this.chapOne.getPageOne(),
      // nextPage: this.chapOne.getPageTwo()
    });
    return commonOne;
  }

  commonTwo = DecisionBuilder.create({
    decisionType: DecisionType.Common,
    agendaScore: DecisionType.Common.valueOf(),
    agendaImpact: 'Idealist',
    // currentPage: this.chapOne.PageOne,
    // nextPage: this.chapOne.PageTwo
  });
  commonThree = DecisionBuilder.create({
    decisionType: DecisionType.Common,
    agendaScore: DecisionType.Common.valueOf(),
    agendaImpact: 'Extremist',
    // currentPage: this.chapOne.PageOne,
    // nextPage: this.chapOne.PageTwo
  });

  constructor()
  {

  }
  getDecisionType(): any
  {
    const { decisionType, agendaScore } = this.common1();
    return `Decision Type: ${decisionType} with an Agenda Score of ${agendaScore}`;
  }

}
