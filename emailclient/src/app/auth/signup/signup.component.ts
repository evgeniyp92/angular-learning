import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { CheckUniqueUsername } from '../validators/check-unique-username';
import { AuthService, SignupCredentials } from '../auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private matchPassword: MatchPassword,
    private checkUniqueUsername: CheckUniqueUsername,
    private authService: AuthService
  ) {}

  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ], // async validators are only ran after all sync validators pass
        [this.checkUniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  onSubmit() {
    if (this.authForm.invalid) return;

    this.authService
      .signup(this.authForm.value as SignupCredentials)
      // bind these to the component instance to avoid context issues
      .subscribe({
        next: (response) => {
          // TODO: navigate to some other route
        },
        error: (error) => {
          if (error.status === 0) {
            this.authForm.setErrors({ noConnection: true });
          }
          this.authForm.setErrors({ unknownError: true });
        },
      });
  }
}
