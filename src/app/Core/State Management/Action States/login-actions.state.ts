import {LoginState} from '../States/login.state';
import {LoginService} from '../../Services/login.service';

export class IdleState extends LoginState
{
  signIn(): LoginState {
    return new SignInState();
  }

  signUp(): LoginState {
    return new SignUpState();
  }
}

export class SignInState extends LoginState
{
  signIn( email: string, password: string ): LoginState
  {
    console.log('Signed In!');
    return;
    //return this.login.userSignIn(email, password);
  }
}

export class SignUpState extends LoginState
{
  signUp( email: string, password: string ): LoginState | Promise<void>
  {
    console.log('Signed Up!');
    return;
  }
}
