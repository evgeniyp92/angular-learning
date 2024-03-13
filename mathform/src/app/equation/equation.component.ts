import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css',
})
export class EquationComponent {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber),
      b: new FormControl(this.randomNumber),
      answer: new FormControl(''),
    },
    [
      (form: AbstractControl): ValidationErrors | null => {
        const { a, b, answer } = form.value;
        if (a + b !== parseInt(answer)) {
          return { addition: true }; // error case
        }
        return null; // success case
      },
    ]
  );

  get randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }
}
