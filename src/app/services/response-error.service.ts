import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ResponseErrorService extends Http {

    constructor( backend: XHRBackend, 
                 defaultOptions: RequestOptions,
                 private authService: AuthService ) {
                 super(backend, defaultOptions);
                }
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch(this.catchErrors());
    }

    private catchErrors() {
        return ( response: Response ) => {
            if (response.status === 401) {
                // handle response here
                this.authService.logout();
                console.log('401!', response);
            }
            return Observable.throw(response);
        }
    }

}