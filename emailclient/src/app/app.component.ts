import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  signedIn$: BehaviorSubject<boolean | null>;

  constructor(private auth: AuthService) {
    this.signedIn$ = this.auth.signedIn$;
  }

  ngOnInit() {
    this.auth.checkAuth().subscribe();
  }
}
