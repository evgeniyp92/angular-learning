import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() inputType: 'password' | 'text' = 'text';
  @Input() controlType = 'input';

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
