import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Containers
import { LoginComponent } from './containers/login.component';
// Components
import { LoginFormComponent } from './components/login-form/login-form.component';
// Services
import { LoginService } from './services/login.service';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {};
