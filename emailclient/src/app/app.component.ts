import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private auth: AuthService) {}
  public signedIn = false;

  ngOnInit() {
    this.auth.signedIn$.subscribe((value) => (this.signedIn = value));
  }
}
