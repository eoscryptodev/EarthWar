import { TitleState } from '../States/title.state';

export class IdleState extends TitleState
{
  title(): TitleState
  {
    return new GameState();
  }
}

export class GameState extends TitleState
{
  title(): TitleState
  {
    console.log('You are in Game State');
    return;
  }
}
