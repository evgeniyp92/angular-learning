import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Email } from './email';

// resolvers block route loading until they're done

// resolver should return the kind of data expected in the receiving component
@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor() {}

  resolve() {
    return {
      id: 'asdf',
      subject: 'yeah',
      to: 'uh-huh',
      from: 'ur mom',
      text: 'yeah guess what i did last night',
    };
  }
}
