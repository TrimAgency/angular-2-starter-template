import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
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

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpResponse<any>>> {
    return next.handle(req)
               .do( event => {
                 if (event instanceof HttpResponse ) {
                   // place your response logic here
                 }
               } )
               .catch(response => {
                 if (response instanceof HttpErrorResponse && response.status === 401 ) {
                  // 401 unauthorized logic here
                  console.log('401', response);
                  this.auth.logout();
                 }

                return Observable.throw(response);
                });

  }
}
