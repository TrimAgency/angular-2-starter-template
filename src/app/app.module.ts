import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';

// Custom Modules
import { LoginModule } from './login/login.module';
import { SpinnerModule } from './easy-spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule,

    // Custom Modules
    LoginModule,
    SpinnerModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
