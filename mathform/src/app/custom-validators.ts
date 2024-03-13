import { ValidationErrors, Validators, AbstractControl } from '@angular/forms';

export class CustomValidators extends Validators {
  static addition(form: AbstractControl): ValidationErrors | null {
    const { a, b, answer } = form.value;
    if (a + b !== parseInt(answer)) {
      return { addition: true };
    }
    return null;
  }
}
