import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

// observable wont work because the sub logic sucks
// subjects dont work because they are hot in nature
// so we need a behavior subject

// behavior subjects need a default value and provide a value to anyone who
// subscribes to it immediately

interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private rootUrl = 'https://api.angular-email.com/';
  public signedIn$ = new BehaviorSubject<boolean | null>(null); // add dollar sign to indicate that it is an observable

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      this.rootUrl + 'auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.rootUrl + 'auth/signup', credentials, {})
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(this.rootUrl + 'auth/signedin').pipe(
      tap(({ authenticated }) => {
        this.signedIn$.next(authenticated);
      })
    );
  }

  signout() {
    return this.http.post(this.rootUrl + 'auth/signout', {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(...credentials: [username: string, password: string]) {
    return this.http
      .post(this.rootUrl + 'auth/signin', {
        username: credentials[0],
        password: credentials[1],
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}
