import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'login-form',
    styleUrls: [],
    templateUrl: 'login-form.component.html'
})

export class LoginFormComponent {
    user: Object = {}

    @Output()
    submitLogin: EventEmitter<any> = new EventEmitter();

    constructor(){};

    submitForm() {
        //this.submitLogin.emit(this.user);
        console.log('login!')
    }

}