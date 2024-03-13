import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css',
})
export class EquationComponent {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber),
    b: new FormControl(this.randomNumber),
    answer: new FormControl(''),
  });

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
