import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";
import { Router } from '@angular/router';
import { LoginHandler } from "../../../../Core/State Management/Handler States/login-handler.state";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit
{
  playerSignIn = new LoginHandler();

  constructor( public loginAuthService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  hasAccount( pageName: string )
  {
    this.router.navigate(['/'+pageName]);
  }

  setSignUpState( username: string, password: string ): Promise<void>
  {
    this.playerSignIn.signUp( username, password );
    return this.userSignUp( username, password );
  }

  userSignUp( username: string, password: string ): Promise<void>
  {
    return this.loginAuthService.signUp( username, password );
  }


}
