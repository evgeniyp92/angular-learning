import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Email } from './email';
import { EmailService } from './email.service';
import { Observable, catchError, EMPTY } from 'rxjs';

// resolvers block route loading until they're done

// resolver should return the kind of data expected in the receiving component
@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY; // empty is a dummy observable that is immediately resolved and complete
      })
    );
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
