import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { map, tap, take } from 'rxjs/operators';

import { LoginService } from '../Core/Services/login.service';

@Injectable({ providedIn: 'root' })
export class LoginAuthGuard implements CanActivate {
  constructor(private loginAuthService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    if( this.loginAuthService.isLoggedIn !== true ) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
}
