import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl(''),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvv: new FormControl(''),
  });
}
