import { Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Gameplay/user.model';
import auth = firebase.auth;

/*export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}*/


@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  userState: any;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone)
  {
    this.angularFireAuth.authState.subscribe( user => {
      if ( user )
      {
        this.userState = user;
        localStorage.setItem( 'user', JSON.stringify( this.userState ));
      } else {
        localStorage.setItem( 'user', null );
        JSON.parse( localStorage.getItem( 'user' ));
      }
    })
  }
  /*
  * The purpose of this method is to take in an email and password and
  * return the character creation module and set the user data based on
  * the result of what was entered
  * */
  signIn( email: string, password: string ): Promise<void>
  {
    return this.angularFireAuth.signInWithEmailAndPassword( email, password )
      .then( (result) => {
        this.ngZone.run( () => {
          this.router.navigate(['characterbuild'])
        });
        this.setUserData( result.user );
      }).catch( (error) => {
        window.alert( error.message );
      })
  }

  signUp( email: string, password: string ): Promise<void>
  {
    return this.angularFireAuth.createUserWithEmailAndPassword( email, password )
      .then( ( result) => {
        this.sendVerificationEmail();
        this.setUserData( result.user );
      }).catch( ( error ) => {
        window.alert( error.message );
      })
  }
  /*
  * The purpose of this method is to return a Promise of a
  * signed up user who we send a verification email to
  * then navigates to the email verification component
  * */
  sendVerificationEmail(): Promise<void>
  {
    return this.angularFireAuth.currentUser
      .then( user => {
        user.sendEmailVerification()
          .then( () => {
            this.router.navigate(['email-verification']);
          })
      })
  }

  forgotPassword( passwordResetEmail )
  {
    return this.angularFireAuth.sendPasswordResetEmail( passwordResetEmail )
      .then( () => {
        window.alert( 'Password reset email sent. Please check your inbox.' );
      }).catch( ( error ) => {
        window.alert( error );
      })
  }

  get isLoggedIn(): boolean
  {
    const user = JSON.parse( localStorage.getItem( 'user' ));
    return ( user !== null && user.emailVerified !== false );
  }

  googleAuth()
  {
    return this.authLogin( new auth.GoogleAuthProvider());
  }

  authLogin( provider )
  {
    return this.angularFireAuth.signInWithPopup( provider )
      .then(( result ) => {
        this.ngZone.run( () => {
          this.router.navigate(['character-creator'])
        })
        this.setUserData( result.user );
      }).catch( (error) => {
        window.alert( error );
      })
  }

  setUserData( user )
  {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc( `users/${user.uid}` );
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set( userState, {
      merge: true
    })
  }

  signOutUser()
  {
    return this.angularFireAuth.signOut()
      .then( () => {
        localStorage.removeItem( 'user' );
        this.router.navigate(['sign-in']);
      })
  }


  private handleError = ( errorResponse: HttpErrorResponse ) =>
  {
    let errorMessage = 'An unknown error occurred!';
    if ( !errorResponse.error || !errorResponse.error.error)
    {
      return throwError( errorMessage );
    }
    switch ( errorResponse.error.error.message )
    {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'No account found with this email address!';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already in use!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password used!';
        break;
      case 'INVALID_ARGUMENT':
        errorMessage = 'There is an invalid argument somewhere in the code!'
        break;
    }
    return throwError( errorMessage );
  };

}
