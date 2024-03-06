// Pipes are functions that transform data. They are used in the template to
// format data before displaying it.
import {
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  JsonPipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public name: string = '';
  public date: string = '';
  public amount: number = 0;
  public height: number = 0;
  public car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.name = eventTarget.value;
    }
  }

  onDateChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.date = eventTarget.value;
    }
  }

  onAmountChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.amount = parseFloat(eventTarget.value);
    }
  }

  onHeightChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.height = parseFloat(eventTarget.value);
    }
  }
}
