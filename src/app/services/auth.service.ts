import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  // be sure to change the name of app-token to your-app-name-token

    getToken() {
       const token = localStorage.getItem('app-token') || '';
       return token;
    }

    setToken(token: string) {
      localStorage.setItem('app-token', token );
    }

    logout() {
      localStorage.clear();
    }
}

