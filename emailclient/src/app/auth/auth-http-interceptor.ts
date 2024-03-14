import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify or log the outgoing request here

    // req.withCredentials = true; // doesnt work, props are read-only
    // const newReq = { ...req, withCredentials: true }; // doesnt work, missing serialize method
    const newReq = req.clone({
      withCredentials: true,
    });
    // console.log(newReq);
    // handing off the http request to the next interceptor or the actual request handler
    // this is actually an observable so we can listen to it after we hand it off
    return next
      .handle(newReq)
      .pipe
      // filter((v) => v.type === HttpEventType.Sent),
      // tap(() => {
      //   console.log('Request was sent to server');
      // })
      ();
  }
}
