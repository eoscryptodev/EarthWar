import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

// import { Recipe } from '../recipes/recipe.model';
// import { RecipeService } from '../recipes/recipe.service';
import { LoginService } from '../Core/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private login: LoginService) {

  }

  storeCharacters() {
    /*return this.http.put(
      'https://earthwar-battle-default-rtdb.firebaseio.com/profiles.json',
      {
        email,
        username,
        password,
        returnSecureToken: true
      })
  }*/
  }
}
