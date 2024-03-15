import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((subscriber) => {
      subscriber.next(true); // this doesnt strictly mark an Observable as complete
      subscriber.complete(); // this step seems irrelevant on Ng17 but its good to know anyway
    });
  }
}
