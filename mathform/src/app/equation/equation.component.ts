import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.css',
})
export class EquationComponent {
  secondsPerSolution = 0;

  ngOnInit() {
    // statusChanges emits whether or not the form is valid
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(150),
        scan(
          (accumulator, __value) => {
            return {
              numberSolved: accumulator.numberSolved + 1,
              startTime: accumulator.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

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
