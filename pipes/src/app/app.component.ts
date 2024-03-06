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
import { ConvertPipe } from './convert.pipe';

type CouldBeNull<T> = T | null;

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
    ConvertPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public name: CouldBeNull<string> = null;
  public date: CouldBeNull<string> = null;
  public amount: CouldBeNull<number> = null;
  public height: CouldBeNull<number> = null;
  public miles: CouldBeNull<number> = null;
  public car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onMilesChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.miles = parseFloat(eventTarget.value);
    }
  }

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
