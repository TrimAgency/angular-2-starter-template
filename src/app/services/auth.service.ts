import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    getToken() {
       let token = localStorage.getItem('currentUser') || '';
       return token;
    }

    setToken(token: string) {
      localStorage.setItem('currentUser', token );
      // need redirect to authenticated home
    }

    logout() {
      localStorage.clear();
    }
}

