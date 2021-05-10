import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeService } from './recipes/recipe.service';
import { LoginInterceptorService } from '../Login/login-interceptor.service';


@NgModule({
  providers: [
    // ShoppingListService,
    // RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
