import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    styleUrls: [],
    template: `
      <div>

        <app-login-form 
        (submitLogin)="submitLogin($event)"
        ></app-login-form>

      </div>
    `
})

export class LoginComponent {
    constructor(private loginService: LoginService,
                private authService: AuthService ) {};
    submitLogin(event) {
        this.loginService
        .login(event.email, event.password)
        .subscribe( (data) => {
          console.log(data.jwt);
          this.authService.setToken(data.jwt);
        },
        (error: any) => {
            // handle login error here
            console.log('error', error);
        } );
    }
}
