import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private auth: AuthService) {}
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  handleSubmit() {
    if (this.authForm.invalid) return;
    const { username, password } = this.authForm.value;
    if (username && password) {
      this.auth.signin(username, password).subscribe({
        next: (response) => {},
        error: (err) => {
          if (err.error.username || err.error.password) {
            this.authForm.setErrors({ credentials: true });
          }
        },
      });
    }
  }
}
