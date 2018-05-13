
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { HttpEvent,
         HttpInterceptor,
         HttpHandler,
         HttpRequest,
         HttpResponse,
         HttpErrorResponse} from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor( private auth: AuthService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
               tap( event => {
                 if (event instanceof HttpResponse ) {
                   // place your response logic here
                 }
               }),
               catchError(response => {
                 if (response instanceof HttpErrorResponse && response.status === 401 ) {
                  // 401 unauthorized logic here
                  console.log('401', response);
                  this.auth.logout();
                 }

                return observableThrowError(response);
                }));
  }
}
