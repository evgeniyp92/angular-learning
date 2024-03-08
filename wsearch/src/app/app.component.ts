import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // inject service depenency
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    console.log(this.wikipedia.search(term));
  }
}
