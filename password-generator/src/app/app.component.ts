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
  public password = '';
  private options = {
    letters: false,
    numbers: false,
    symbols: false,
  };

  public onButtonClick(): void {
    this.password = 'My Password';
  }

  public onChangeOptions(arg: 'letters' | 'numbers' | 'symbols') {
    this.options[arg] = !this.options[arg];
    console.log(this.options);
  }
}
