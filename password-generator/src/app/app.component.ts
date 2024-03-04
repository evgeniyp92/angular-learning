// Handle Events and State Here

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface FieldEventTarget extends EventTarget {
  value?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private password = '';
  private options = {
    letters: false,
    numbers: false,
    symbols: false,
    length: 0,
  };

  public get pw() {
    return this.password;
  }

  public onButtonClick() {
    console.log(`
      About to generate a password with the following: 
      Includes letters: ${this.options.letters}
      Includes numbers: ${this.options.numbers}
      Includes symbols: ${this.options.symbols}
    `);
  }

  public toggleOption(arg: 'letters' | 'numbers' | 'symbols') {
    this.options[arg] = !this.options[arg];
  }

  public changeLength(eventTarget: EventTarget | null) {
    if (!eventTarget) return;
    const value = (eventTarget as HTMLInputElement).value;
    const length = Number(value);
    if (Number.isInteger(length)) {
      this.options.length = length;
    }
  }
}
