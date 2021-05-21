import {
  Component,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../Core/Services/login.service';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import {DataStorageService} from "../Shared/data-storage.service";
import { LoginHandler } from '../Core/State Management/Handler States/login-handler.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit
{
  isShowing = true;
  signUpForm: FormGroup;
  loginForm: FormGroup;
  isLoading = false;
  isSignInMode = true;
  isLoginMode = true;
  error: string = null;
  // @ViewChild( PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private login: DataStorageService) {
  }

  ngOnInit(): void {
    // this.initForm();
    console.log('The Login Component is Loaded!');
  }

}
