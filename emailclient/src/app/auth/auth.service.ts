import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private rootUrl = 'https://api.angular-email.com';

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: any): Observable<any> {
    return this.http.post<any>(
      'https://api.angular-email.com/auth/signup',
      credentials
    );
  }
}
