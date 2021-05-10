import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { LoginService } from '../Core/Services/login.service';
import { exhaustMap, take }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService
{
  /*constructor( private loginService: LoginService )
  {

  }

  intercept( req: HttpRequest<any>, next: HttpHandler )
  {
    return this.loginService.user.pipe(
      take(1),
      exhaustMap( user => {
        if ( !user )
        {
          return next.handle( req );
        }
        const modifiedReq = req.clone({
          // Adding a token to a request will vary depending on the API you are using
          // This is a method that works when using Firebase.
          params: new HttpParams().set( 'login', user.token )
        })
        return next.handle( modifiedReq );
      })
    );
  }*/
}
