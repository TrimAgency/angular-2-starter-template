import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../../../environments/environment';
import { Jwt } from '../models/jwt.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}
  login(email: string, password: string): Observable<Jwt> {
    // modify to fit API
    let data = { auth: {
        email: email,
        password: password
    }};
    return this.http
              .post(`${API_URL}/user_token`, data)
              .map((response: Response) => response.json() )
              .catch((error: any) => Observable.throw(error));
  }
}
