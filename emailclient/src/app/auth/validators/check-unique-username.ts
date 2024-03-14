import { HttpClient } from '@angular/common/http';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // enables dependency injection
export class CheckUniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  // normally you would use a service to hit an outside resource but we'll do it this way here
  // have to specify an AbstractControl as the arg type because FormControl does not fully implement AbstractControl
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const value = control.value;
    console.log('value', value);
    return null;
  }
}
