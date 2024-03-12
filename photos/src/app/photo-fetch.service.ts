import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

type UnsplashAPIResponse = {
  urls: {
    regular: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PhotoFetchService {
  constructor(private http: HttpClient) {}
  // get a random photo from the unsplash api
  search() {
    return this.http
      .get<UnsplashAPIResponse>('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'i7ywfYEIkdAn-zhaIpkHQbJHnVWN85MGho3eyop5LrU',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
