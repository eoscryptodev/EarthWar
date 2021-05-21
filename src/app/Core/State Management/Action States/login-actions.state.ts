import {LoginState} from '../States/login.state';
import {LoginService} from '../../Services/login.service';

export class IdleState extends LoginState
{
  public signIn(): LoginState {
    return new SignInState();
  }

  public signUp(): LoginState {
    return new SignUpState();
  }
}

export class SignInState extends LoginState
{
  //private login: LoginService;

  constructor( private login?: LoginService) {
    super();
  }

  signIn( email: string, password: string ): any
  {
    console.log('Signed In!');
    //return this.login.userSignIn(email, password);
  }
}

export class SignUpState extends LoginState
{
  login: LoginService;

  signUp( email: string, password: string ): LoginState | Promise<void>
  {
    return this.login.signUp(email, password);
  }
}
