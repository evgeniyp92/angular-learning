// services are automatically made available to all parts of your app
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  search(term: string) {
    console.log(`honk`);
    return `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&format=json`;
  }
}
