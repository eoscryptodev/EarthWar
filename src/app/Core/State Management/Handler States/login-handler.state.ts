import { LoginStateInterface } from '../../../Shared/interfaces/state-interfaces';
import { IdleState } from '../Action States/login-actions.state';
import { LoginState } from '../States/login.state';

export class LoginHandler implements LoginStateInterface
{
  private state: LoginState | Promise<void> = new IdleState();

  constructor()
  {
    this.logCurrentState();
  }

  signIn( email: string, password: string ): LoginState
  {
    if (this.state instanceof LoginState) {
      this.state = this.state.signIn( email, password );
    }
    this.logCurrentState();
    return;
  }

  signUp( email: string, password: string ): LoginState
  {
    if (this.state instanceof LoginState) {
      this.state = this.state.signUp( email, password );
    }
    this.logCurrentState();
    return;
  }

  private logCurrentState(): void
  {
    console.log( this.state );
  }
}
