import { HttpClient } from '@angular/common/http';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // enables dependency injection
export class CheckUniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  // normally you would use a service to hit an outside resource but we'll do it this way here
  async validate(formGroup: AbstractControl): Promise<ValidationErrors | null> {
    return null;
  }
}
