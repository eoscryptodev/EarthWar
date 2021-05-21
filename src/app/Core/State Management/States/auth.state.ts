import { AuthStateModel } from '../Action States/auth.actions';
import { Action, State, Selector, StateContext, Store } from '@ngxs/store';
import { LoginService } from '../../Services/login.service';
import { Injectable } from "@angular/core";
import Login = AuthStateModel.Login;
import {patch} from "@ngxs/store/operators";

export interface Authentication {
  isLoggedIn: boolean;
  username: AuthStateModel.Login | Promise<void>;
  password: AuthStateModel.Login | Promise<void>;
}
@State<Authentication>({
  name: 'auth',
  defaults: {
    isLoggedIn: false,
    username: null,
    password: null
  }
})
@Injectable()
export class AuthState
{
  @Selector()
  public static isLoggedIn( state: Authentication ): boolean
  {
    return state.isLoggedIn;
  }

  @Selector()
  public static username( state: Authentication ): AuthStateModel.Login | Promise<void>
  {
    return state.username;
  }

  @Selector()
  public static password( state: Authentication ): AuthStateModel.Login | Promise<void>
  {
    return state.password;
  }

  constructor(private store: Store, private loginService: LoginService) {}

  @Action( AuthStateModel.Login )
  getLogin( ctx: StateContext<Authentication>, action: AuthStateModel.Login )
  {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    })
    return this.loginService.userSignIn( action.email, action.password );

  }
}
