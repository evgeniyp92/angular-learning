import { ValidationErrors, Validators, AbstractControl } from '@angular/forms';

export class CustomValidators extends Validators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const num1 = form.value[sourceOne];
      const num2 = form.value[sourceTwo];
      if (num1 + num2 !== parseInt(sum)) {
        return { addition: true };
      }
      return null;
    };
  }
}
