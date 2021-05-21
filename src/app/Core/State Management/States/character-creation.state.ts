import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { CharacterCreationInterface } from '../../../Shared/interfaces/state-interfaces';


@Injectable()
export abstract class CharacterCreationState implements CharacterCreationInterface
{
  creation(): CharacterCreationState
  {
    throwError( 'Invalid Operation!' );
    return;
  }

  submit(): CharacterCreationState
  {
    throwError( 'Invalid Operation' );
    return;
  }
}
