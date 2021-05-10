import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../Core/Services/login.service';
import { LoginComponent } from './login.component';
import { SharedModule } from "../Shared/shared.module";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { SignInComponent } from './Sign-In/components/sign-in/sign-in.component';
import { SignUpComponent } from './Sign-Up/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Verify/components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './Forgot-Password/components/forgot-password/forgot-password.component';

@NgModule({
    imports: [
        LoginRoutingModule,
        SharedModule,
        MatTabsModule,
      RouterModule
    ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  providers: [ LoginService ]
})
export class LoginModule { }
