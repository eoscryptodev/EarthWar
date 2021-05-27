import { TitleInterface } from '../../../Shared/interfaces/state-interfaces';
import { IdleState } from '../Action States/title-state.actions';
import { TitleState } from '../States/title.state';

export class TitleHandlerState implements TitleInterface
{
  private state: TitleState = new IdleState();

  constructor()
  {
    this.logCurrentState();
  }

  title(): TitleState
  {
    if (this.state instanceof TitleState) {
      this.state = this.state.title();
    }
    this.logCurrentState();
    return;
  }

  private logCurrentState(): void
  {
    console.log( this.state );
  }
}
