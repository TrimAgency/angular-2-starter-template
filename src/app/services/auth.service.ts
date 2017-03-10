import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
// be sure to change the name of app-token to your-app-name-token

    getToken() {
       let token = localStorage.getItem('app-token') || '';
       return token;
    }

    setToken(token: string) {
      localStorage.setItem('app-token', token );
    }

    logout() {
      localStorage.clear();
    }
}

