import { CharacterCreationInterface } from '../../../Shared/interfaces/state-interfaces';
import { CharacterCreationState } from '../States/character-creation.state';
import { CharacterCreationActions } from '../Action States/character-creation.actions';

export class CharacterCreationHandler implements CharacterCreationInterface
{
  private creationState: CharacterCreationState = new CharacterCreationActions.Creation();
  private submissionState: CharacterCreationState = new CharacterCreationActions.Submission();

  constructor()
  {
    this.currentState();
  }

  creation(): CharacterCreationState
  {
    if (this.creationState instanceof CharacterCreationState)
    {
      this.creationState = this.creationState.creation().creation();
    }
    this.currentState();
    return;
  }

  submit(): CharacterCreationState
  {
    if ( this.submissionState instanceof CharacterCreationState )
    {
      this.submissionState = this.submissionState.submit();
    }
    this.currentState();
    return;
  }

  private currentState(): void
  {
    if (this.creationState instanceof CharacterCreationState )
    {
      console.log(this.creationState);

    } else if ( this.submissionState instanceof CharacterCreationState )
    {
      console.log(this.submissionState);

    } else {
      console.log(this.creationState);
    }

  }
}
