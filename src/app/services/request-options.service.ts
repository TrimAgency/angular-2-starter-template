import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {

    constructor(private authService: AuthService) {
        super();
        this.headers.set('Authorization', 'Bearer ${ authService.getToken() }');
    }
}