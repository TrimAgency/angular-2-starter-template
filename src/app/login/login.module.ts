import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Containers
import { LoginComponent } from './containers/login.component';
// Components
import { LoginFormComponent } from './components/login-form.component';
// Services
import { LoginService } from './services/login.service';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule {};
