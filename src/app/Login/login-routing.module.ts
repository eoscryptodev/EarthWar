import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from "./Sign-In/components/sign-in/sign-in.component";
import { SignUpComponent } from "./Sign-Up/components/sign-up/sign-up.component";
import { VerifyEmailComponent } from "./Verify/components/verify-email/verify-email.component";
import { ForgotPasswordComponent } from "./Forgot-Password/components/forgot-password/forgot-password.component";
import { LoginAuthGuard } from "./login.guard";

const routes: Routes = [
  { path: '', component: LoginComponent, children:[
      { path: ':sign-up', component: SignUpComponent, children:[
          { path: ':sign-in', component: SignInComponent},
        ]},
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
