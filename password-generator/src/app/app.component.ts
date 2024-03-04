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
  // Basic function that needs to be mapped in the template
  public onButtonClick() {
    console.log('Button was clicked');
  }
}
