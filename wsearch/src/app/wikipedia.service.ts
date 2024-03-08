// services are automatically made available to all parts of your app
import { Injectable } from '@angular/core';

// The @Injectable decorator is used to define a service. Since it's provided in
// root, it will be available to all parts of the app. The providedIn property is
// used to register the service with the root injector. This is a shorthand way
// of registering the service with the root injector. This is a feature of
// Angular, not TypeScript.
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
