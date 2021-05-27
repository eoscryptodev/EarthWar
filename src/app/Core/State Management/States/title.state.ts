import { throwError } from "rxjs";
import { TitleInterface } from "../../../Shared/interfaces/state-interfaces";

export abstract class TitleState implements TitleInterface
{
  title(): TitleState
  {
    throwError('Invalid Operation' );
    return;
  }
}
