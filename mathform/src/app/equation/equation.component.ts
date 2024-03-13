import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css',
})
export class EquationComponent {
  ngOnInit() {
    // statusChanges emits whether or not the form is valid
    this.mathForm.statusChanges.subscribe((value) => {
      if (value === 'INVALID') return;

      this.mathForm.setValue({
        a: this.randomNumber,
        b: this.randomNumber,
        answer: '',
      });
    });
  }

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber),
      b: new FormControl(this.randomNumber),
      answer: new FormControl(''),
    },
    // form arg is provided automagically by Angular (via bind?)
    // this was passing a ref but you can also use closures
    [CustomValidators.addition('answer', 'a', 'b')]
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
