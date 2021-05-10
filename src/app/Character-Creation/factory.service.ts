import { formUpdate } from '../Shared/interfaces/interfaces';
import { OfficerUpdateService, SoldierUpdateService } from './form-update.service';
import {ContentChildren, ElementRef, Injectable} from "@angular/core";


/*
* The Base Factory Class
* */
@Injectable({
  providedIn: 'root'
})
export abstract class FactoryService
{

  abstract createUpdate(): formUpdate;

  render()
  {
    let form: formUpdate = this.createUpdate();
    form.onSelect();
    form.Render();
  }
}
/*
* An Officer Factory
* */
@Injectable({
  providedIn: 'root'
})
export class OfficerFactory extends FactoryService
{
  createUpdate(): formUpdate {
    return new OfficerUpdateService().Render();
  }
}
/*
* A Soldier Factory
* */
@Injectable({
  providedIn: 'root'
})
export class SoldierFactory extends FactoryService
{
  createUpdate(): formUpdate {
    return new SoldierUpdateService();
  }
}
