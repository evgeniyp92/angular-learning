// Handle Events and State Here

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  };

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

  public get pw() {
    return this.password;
  }
}
