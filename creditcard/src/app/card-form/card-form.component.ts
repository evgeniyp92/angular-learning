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
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvv: new FormControl(''),
  });
}
