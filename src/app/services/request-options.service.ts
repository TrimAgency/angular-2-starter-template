import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {

  constructor(private authService: AuthService) {
    super();
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    const newOptions = super.merge(options);
    newOptions.headers.set('Authorization',
                           `Bearer ${ this.authService.getToken() }`);
    return newOptions;
  }
}
