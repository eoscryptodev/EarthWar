import { LoginStateInterface } from '../../../Shared/interfaces/state-interfaces';
import { throwError } from "rxjs";

export abstract class LoginState implements LoginStateInterface
{
  public signIn(email: string, password: string): LoginState | Promise<void>
  {
    throwError('Invalid Operation' );
    return;
  }

  public signUp(email: string, password: string): LoginState | Promise<void>
  {
    throwError( 'Invalid Operation' );
    return;
  }
}
