import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    // The Validators class is used for form validation.
    // NB: Validators are ran left to right and when there are no errors the value is null
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(24),
      // Validators.pattern(/\\s/),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[1-2])\/\d{2}$/),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  onSubmit() {
    console.log('Form submitted');
    console.table(this.cardForm.value);
  }
}
