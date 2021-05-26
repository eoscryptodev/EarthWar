import { CharacterCreationState } from '../States/character-creation.state';

export namespace CharacterCreationActions
{
  export class Creation extends CharacterCreationState
  {
    creation(): CharacterCreationState
    {
      return new CharacterCreation();
    }
  }

  export class Submission extends CharacterCreationState
  {
    submit(): CharacterCreationState
    {
      return new SubmissionState();
    }
  }
}

export class CharacterCreation extends CharacterCreationState
{
  creation(): CharacterCreationState
  {
    console.log('You are in Creation State!');
    return;
  }
}

export class SubmissionState extends CharacterCreationState
{
  submit(): CharacterCreationState
  {
    console.log('Character Form Submitted');
    return;
  }
}
