import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Jwt } from '../models/jwt.interface';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<Jwt> {
    // modify to fit API
    const data = { auth: {
        email: email,
        password: password
    }};

    return this.http.post<Jwt>(`${API_URL}/user_token`, data);
  }
}
