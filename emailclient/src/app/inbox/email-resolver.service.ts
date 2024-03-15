import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Email } from './email';
import { EmailService } from './email.service';

// resolvers block route loading until they're done

// resolver should return the kind of data expected in the receiving component
@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id);
  }
}

/**
 * 
 * Since Resolve is depricated here's a solution with the ResolveFn instead:

import { ResolveFn } from '@angular/router';
import { EmailResponse, EmailService } from './email.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
 
 
export const emailResolver: ResolveFn<EmailResponse> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const { id } = route.params;
      return  inject(EmailService).getEmail(id);
    };
 
 * 
 */
