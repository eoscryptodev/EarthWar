import { ElementRef, Injectable } from '@angular/core';
import { OfficerFactory, SoldierFactory } from './factory.service';
import { formUpdate } from "../Shared/interfaces/interfaces";
import {zip, Observable, of, throwError} from "rxjs";
import {
  FormGroup,
  ValidatorFn,
  Validators,
  AsyncValidatorFn,
  AsyncValidator,
  AbstractControl,
  FormControl, ValidationErrors
} from "@angular/forms";
import { ArchetypeBuilder } from '../Shared/builder';
import {debounceTime, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CharacterCreationService
{
  update: formUpdate;
  skillsForm: FormGroup;
  abilitiesForm: FormGroup;

  asyncArchetypeValidator(): AsyncValidatorFn
  {
    let playerArchetype = '';
    return ( control: AbstractControl ): Observable<ValidationErrors> => {
      const chosenArchetype: Observable<FormGroup>[] = [];
      // POTENTIAL FIX...MOVE CPM
      const chosenClass$: Observable<FormGroup> = control.get( 'classes' ).value;
      chosenArchetype.push( chosenClass$ );
      const chosenHistory$: Observable<FormGroup> = control.get( 'histories' ).value;
      chosenArchetype.push( chosenHistory$ );

      return zip( chosenArchetype ).pipe(
        debounceTime(500),
        map(([chosenClass, chosenHistory]) => {
          if (chosenClass.value === 'Assassin' && chosenHistory.value === 'Space Explorer') {
            playerArchetype = 'The Hunter Seeker';
            console.log(playerArchetype);
            return of({'chosenArchetype': playerArchetype});

          } else if (chosenClass.value === 'Mechanaut' && chosenHistory.value === 'Space Explorer') {
            playerArchetype = 'The Behemoth';
            console.log(playerArchetype);
            return of({'chosenArchetype': playerArchetype});

          } else if (chosenClass.value === 'Void Walker' && chosenHistory.value === 'Space Explorer') {
            playerArchetype = 'The Arcanist';
            console.log(playerArchetype);
            return of({'chosenArchetype': playerArchetype});

          } else if (chosenClass.value === 'Officer' && chosenHistory.value === 'Space Explorer') {
            playerArchetype = 'The Scout Commander';
            console.log(playerArchetype);
            return of({'chosenArchetype': playerArchetype});

          } else if (chosenClass.value === 'Rogue' && chosenHistory.value === 'Space Explorer') {
            playerArchetype = 'The Trickster';
            console.log(playerArchetype);
            return of({'chosenArchetype': playerArchetype});

          }
          return of(null);
        }))
    }
  }

  archetypeValidator(): ValidatorFn
  {
    return ( form: FormControl ): Validators | null => {
      const chosenClass: string = form.get('classes').value;
      const chosenHistory: string = form.get('histories').value;

      if ( chosenClass === 'Assassin' && chosenHistory === 'Space Explorer' )
      {
        const chosenArchetype = 'The Hunter Seeker';
        console.log( chosenArchetype );
        return chosenArchetype ? null : {};

      } else if ( chosenClass === 'Mechanaut' && chosenHistory === 'Space Explorer' )
      {
        const chosenArchetype = 'The Behemoth';
        console.log( chosenArchetype );
        return chosenArchetype ? null : {};

      } else if ( chosenClass === 'Void Walker' && chosenHistory === 'Space Explorer' )
      {
        const chosenArchetype = 'The Arcanist';
        console.log( chosenArchetype );
        return chosenArchetype ? null : {};
      } else if ( chosenClass === 'Officer' && chosenHistory === 'Space Explorer' )
      {
        const chosenArchetype = 'The Scout Commander';
        console.log( chosenArchetype );
        return chosenArchetype ? null : {};
      } else if ( chosenClass === 'Rogue' && chosenHistory === 'Space Explorer' )
      {
        const chosenArchetype = 'The Trickster';
        console.log( chosenArchetype );
        return chosenArchetype ? null : {};
      }
      return null;
    }
  }

  initialize( event ): any
  {
    if ( event.value === "Officer" )
    {
      console.log('The initialize functions is running');
      this.skillsForm.get('piloting').setValue(4, { onlySelf: false });
      this.skillsForm.get('computers').setValue(5, { onlySelf: false });
      this.abilitiesForm.get('might').setValue(3, { onlySelf: false });
      this.abilitiesForm.get('agility').setValue(2, { onlySelf: false });
      this.abilitiesForm.get('intelligence').setValue(6, { onlySelf: false });
      //return this.update = new OfficerFactory().createUpdate();
    } else if ( event.value === "Soldier" )
    {
      return this.update = new SoldierFactory().createUpdate();
    } else {
      throwError( "There is some sort of mistake" );
    }
  }
}
