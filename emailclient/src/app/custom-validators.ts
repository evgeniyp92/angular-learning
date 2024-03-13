import { FormGroup, ValidationErrors, Validators } from '@angular/forms';

export class CustomValidators extends Validators {
  static passwordsMatch(formGroup: FormGroup): ValidationErrors | null {
    console.log(formGroup.value);
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    }
    return { passwordsDoNotMatch: true };
  }
}
