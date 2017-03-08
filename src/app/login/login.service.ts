import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

    constructor(private http: Http){}
    login(email: string, password: string): Observable<any> {
        // modify to fit API
        let data = { auth: {
            email: email,
            password: password
        }};
        console.log(API_URL); 
        return this.http
                 .post(`${API_URL}/user_token`, data)
                 .map((response: Response) => response.json() )
                 .catch((error: any) => Observable.throw(error));
    }
}