// services are automatically made available to all parts of your app
import { Injectable } from '@angular/core';
// The HttpClient module is used to make HTTP requests
import { HttpClient } from '@angular/common/http';

// The @Injectable decorator is used to define a service. Since it's provided in
// root, it will be available to all parts of the app. The providedIn property is
// used to register the service with the root injector. This is a shorthand way
// of registering the service with the root injector. This is a feature of
// Angular, not TypeScript.
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        // This is used to allow cross-origin requests
        origin: '*',
      },
    });
  }
}
