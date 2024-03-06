import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public randomText: string = 'Lorem ipsum dolor sit amet';
  public enteredText: string = '';

  ngOnInit() {
    // call the faker function to generate a random name
    const name = faker.lorem.sentence();
    this.randomText = name;
  }

  public inputMatchesString() {
    return this.enteredText === this.randomText;
  }

  public handleInput(eventTarget: EventTarget | null) {
    // If the event target is an input element, log the value
    if (eventTarget instanceof HTMLInputElement) {
      this.enteredText = eventTarget.value;
    }
    // otherwise do nothing
  }

  handleInputComparison(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
