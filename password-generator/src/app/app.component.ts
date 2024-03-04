// Handle Events and State Here

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

interface FieldEventTarget extends EventTarget {
  value?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _password = '';
  private _options = {
    letters: false,
    numbers: false,
    symbols: false,
    length: 0,
  };

  public get password() {
    return this._password;
  }

  public get opts() {
    return this._options;
  }

  public toggleOption(arg: 'letters' | 'numbers' | 'symbols') {
    this._options[arg] = !this._options[arg];
  }

  public onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this._options.letters) validChars += letters;
    if (this._options.numbers) validChars += numbers;
    if (this._options.symbols) validChars += symbols;

    let generatedPassword = '';
    for (let index = 0; index < this._options.length; index++) {
      const element = validChars[Math.floor(Math.random() * validChars.length)];
      generatedPassword += element;
    }
    this._password = generatedPassword;
  }

  public changeLength(eventTarget: EventTarget | null) {
    if (!eventTarget) return;
    const value = (eventTarget as HTMLInputElement).value;
    const length = Number(value);
    if (Number.isInteger(length)) {
      this._options.length = length;
    }
  }
}
