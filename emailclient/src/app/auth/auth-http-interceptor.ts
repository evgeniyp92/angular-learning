import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // req.withCredentials = true; // doesnt work, props are read-only
    // const newReq = { ...req, withCredentials: true }; // doesnt work, missing serialize method
    const newReq = req.clone({
      withCredentials: true,
    });
    console.log(newReq);
    return next.handle(newReq); // handing off the http request to the next interceptor or the actual request handler
  }
}
