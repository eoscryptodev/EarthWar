import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators } from '@angular/forms';
import { LoginService } from '../Core/Services/login.service';
import { Observable, Subscription } from "rxjs";
import { PlaceholderDirective } from "../Shared/placeholder/placeholder.directive";
import { AlertComponent } from "../Shared/alert/alert.component";
import { Router } from "@angular/router";
import {DataStorageService} from "../Shared/data-storage.service";

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
    private login: DataStorageService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    // this.initForm();
    console.log('The Login Component is Loaded!');
  }

  buttonClicked()
  {
    this.isShowing = false;
  }

  /*signUpSubmit( form: FormGroup ): void
  {
    if ( !form.valid )
    {
      return;
    }
    const email = form.value.email;
    //const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if ( this.isSignInMode )
    {
      authObs = this.loginService.signUp( email, password );
    }

    authObs.subscribe(
      resData => {
      console.log( resData );
      this.isLoading = false;
    },
      errorMessage => {
      console.log( errorMessage );
      this.error = errorMessage;
      //this.showErrorAlert( errorMessage );
      this.isLoading = false;
      });

    form.reset();
  }

  loginSubmit( form: FormGroup ): void
  {
    if ( !form.valid )
    {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if ( this.isLoginMode )
    {
      authObs = this.loginService.login( username, password );
    }

    authObs.subscribe(
      resData => {
        console.log( resData );
        this.isLoading = false;
        this.router.navigate(['/CharacterCreation']);
      },
      errorMessage => {
        console.log( errorMessage );
        this.error = errorMessage;
        //this.showErrorAlert( errorMessage );
        this.isLoading = false;
      });

    form.reset();
  }

  onCreateProfile()
  {
    // this.loginService.signUp();
    console.log('Form is submitted');
  }

  ngOnDestroy()
  {
    if( this.closeSub )
    {
      this.closeSub.unsubscribe();
    }
  }

  private initForm(): void {

    this.signUpForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      //username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }*/

  /*private showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }*/
}
