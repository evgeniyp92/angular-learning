// services are automatically made available to all parts of your app
import { Injectable } from '@angular/core';
// The HttpClient module is used to make HTTP requests
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs'; // 30k gzipped :o

interface Car {
  year: number;
  color: string;
  running: boolean;
  make: {
    name: string;
    dateCreated: number;
  };
}

// Observable class can get a type arg to specify the type of data it will emit
const observable = new Observable<Car>((observer) => {
  observer.next({
    color: 'red',
    year: 2000,
    running: true,
    make: { name: 'Ford', dateCreated: 2000 },
  });
}).pipe(pluck('make', 'dateCreated'));

// Typescript is aware enough to know what kind of data is emitted at the end of the pipe
observable.subscribe((value) => {
  console.log(value);
});

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
    // this returns an observable
    // observables are the source of a lot of bugs in Angular
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
