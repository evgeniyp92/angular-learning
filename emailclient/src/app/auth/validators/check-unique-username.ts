import { HttpClient } from '@angular/common/http';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { map, catchError, ObservableInput, of } from 'rxjs';

@Injectable({ providedIn: 'root' }) // enables dependency injection
export class CheckUniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  // normally you would use a service to hit an outside resource but we'll do it this way here
  // have to specify an AbstractControl as the arg type because FormControl does not fully implement AbstractControl
  validate = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    const value = control.value;
    return this.httpClient
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((value) => {
          if (value.available) return null;
          return null;
        }),
        catchError((err, caught): ObservableInput<any> => {
          console.log(err);
          console.log(caught);
          return of({ nonUniqueUsername: true }); // of converts the value to an observable
        })
      )
      .toPromise(); // convert the observable to a promise to make it actually run
  };
}
