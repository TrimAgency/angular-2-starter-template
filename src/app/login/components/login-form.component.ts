import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login-form',
    styleUrls: [],
    templateUrl: 'login-form.component.html'
})

export class LoginFormComponent {
    user: Object = {};

    @Output()
    submitLogin: EventEmitter<Object> = new EventEmitter<Object>();

    constructor() {};

    login(form: Object, isValid: boolean) {
      console.log('login-form', form, isValid);
      this.submitLogin.emit(form);
    }

}
