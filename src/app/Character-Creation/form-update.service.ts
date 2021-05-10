import {formUpdate} from '../Shared/interfaces/interfaces';
// import { skillsF } from './character-creation.component';
import {ContentChildren, ElementRef, Injectable} from "@angular/core";
import {fromEvent} from 'rxjs'
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OfficerUpdateService implements formUpdate
{
  private officer$: any;
  skillsForm: FormGroup;
  abilitiesForm: FormGroup;

  Render(): any
  {
    // Return mapped values from click event
    /*this.skillsForm.get('piloting').setValue(4, { onlySelf: false });
    this.skillsForm.get('computers').setValue(5, { onlySelf: false });
    this.abilitiesForm.get('might').setValue(3, { onlySelf: false });
    this.abilitiesForm.get('agility').setValue(2, { onlySelf: false });
    this.abilitiesForm.get('intelligence').setValue(6, { onlySelf: false });*/
  }

  onSelect(): any
  {
    // Bind template click event

  }
}

@Injectable({
  providedIn: 'root'
})
export class SoldierUpdateService implements formUpdate
{
  @ContentChildren('soldier') soldierElement: ElementRef;

  Render(): any
  {
    this.onSelect();
  }

  onSelect(): any
  {
    return fromEvent(this.soldierElement.nativeElement, 'click')
      .subscribe(result => {
        console.log(result)
      });
  }

}
