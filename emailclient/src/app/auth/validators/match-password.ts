import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // enables dependency injection
export class MatchPassword implements Validator {
  // static passwordsMatch(formGroup: FormGroup): ValidationErrors | null {
  //   const { password, passwordConfirmation } = formGroup.value;
  //   if (password === passwordConfirmation) {
  //     return null;
  //   }
  //   return { passwordsDoNotMatch: true };
  // }

  validate(formGroup: AbstractControl) {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    }
    return { passwordsDoNotMatch: true };
  }
}
