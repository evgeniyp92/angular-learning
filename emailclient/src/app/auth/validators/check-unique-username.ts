import { HttpClient } from '@angular/common/http';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { map, catchError, ObservableInput, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' }) // enables dependency injection
export class CheckUniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) {}
  // normally you would use a service to hit an outside resource but we'll do it this way here
  // have to specify an AbstractControl as the arg type because FormControl does not fully implement AbstractControl
  validate = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    const value = control.value;
    return this.auth
      .usernameAvailable(value)
      .pipe(
        map((value) => {
          if (value.available) return null;
          return null;
        }),
        catchError((err, caught): ObservableInput<any> => {
          console.log(err);
          console.log(caught);
          if (err.error.username) {
            return of({ nonUniqueUsername: true });
          }
          return of({ generalError: true }); // of converts the value to an observable
        })
      )
      .toPromise(); // convert the observable to a promise to make it actually run
  };
}
