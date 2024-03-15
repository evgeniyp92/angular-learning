import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return new Observable((subscriber) => {
    //   subscriber.next(true); // this doesnt strictly mark an Observable as complete
    //   subscriber.complete(); // this step seems irrelevant on Ng17 but its good to know anyway
    // });
    return this.authService.signedIn$.pipe(
      skipWhile((value) => value === null), // ignore values that are null
      // @ts-expect-error
      take(1), // take the first value that is not skipped
      tap((authenticated) => {
        if (!authenticated) this.router.navigateByUrl('/'); // navigate the user back to home page if they're somewhere they shouldn't be
      })
    );
  }
}
