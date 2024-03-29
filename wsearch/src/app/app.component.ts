import { Component, Input } from '@angular/core';
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // inject service depenency in this case, the 'wikipedia' will be added as a
  // private prop automatically to the instance of the app component, and will
  // be of type 'WikipediaService'. This is a shorthand way of creating a
  // private prop and assigning it the value of the argument passed to the
  // constructor. This is a feature of TypeScript, not Angular.

  // TLDR any service can be made available in any component by adding it to the constructor
  constructor(private wikipedia: WikipediaService) {}

  pages: unknown[] = [];

  onTerm(term: string) {
    // subscribing to the observable and getting the response
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
