import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor( private auth: AuthService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
               .do( (event) => {
      if ( event instanceof HttpResponse && event.status === 401 ) {
        // only added for logging, feel free to remove
        console.log('401!', event);

        this.auth.logout();
        // add additional logic here
      }
    });

  }
}
