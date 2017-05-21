import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './services/auth.service';
import { RequestOptionsService } from './services/request-options.service';
import { ResponseErrorService } from './services/response-error.service';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,

    // Custom Modules
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    AuthService,
    { provide: RequestOptions, useClass: RequestOptionsService },
    { provide: Http, useClass: ResponseErrorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Comment in the lines below to inspect router configuration in the console:
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
