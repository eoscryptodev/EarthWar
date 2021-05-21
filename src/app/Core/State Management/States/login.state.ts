import { LoginStateInterface } from '../../../Shared/interfaces/state-interfaces';
import { throwError } from "rxjs";

export abstract class LoginState implements LoginStateInterface
{
  signIn(email: string, password: string): LoginState | Promise<void>
  {
    throwError('Invalid Operation' );
    return;
  }

  signUp(email: string, password: string): LoginState | Promise<void>
  {
    throwError( 'Invalid Operation' );
    return;
  }
}
