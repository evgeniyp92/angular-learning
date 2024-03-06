// Pipes are functions that transform data. They are used in the template to
// format data before displaying it.
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public name: string = '';

  onNameChange(eventTarget: EventTarget | null) {
    if (eventTarget instanceof HTMLInputElement) {
      this.name = eventTarget.value;
    }
  }
}
