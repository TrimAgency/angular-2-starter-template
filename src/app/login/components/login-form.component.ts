import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
    selector: 'app-login-form',
    styleUrls: [],
    templateUrl: 'login-form.component.html'
})

export class LoginFormComponent {
  user: User;

  @Output()
    submitLogin: EventEmitter<User> = new EventEmitter<User>();

    constructor() {
  };

  login(value: User, isValid: boolean) {
    if (isValid) {
        console.log(value);
        this.submitLogin.emit(value);
     }
   }

}
