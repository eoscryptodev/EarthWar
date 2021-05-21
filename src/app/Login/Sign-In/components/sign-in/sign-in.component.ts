import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";
import { AuthState } from '../../../../Core/State Management/States/auth.state';
import { Observable } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import {LoginHandler} from "../../../../Core/State Management/Handler States/login-handler.state";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit
{
  playerSignIn = new LoginHandler();

  constructor( private loginAuthService: LoginService ) { }

  ngOnInit(): void
  {

  }

  setState( username: string, password: string ): Promise<void>
  {
    this.playerSignIn.signIn( username, password );
    return this.userSignIn( username, password );
  }

  userSignIn( username: string, password: string ): Promise<void>
  {
    return this.loginAuthService.userSignIn(username, password);
  }

  getGoogleAuth(): Promise<void>
  {
    return this.loginAuthService.googleAuth();
  }
}

