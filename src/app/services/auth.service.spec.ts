import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service;
  let store = {};
  const token = 'dummy-token';
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
          AuthService ]
      });
    }));

  beforeEach(inject([AuthService], s => {
    service = s;
  }));

  beforeEach(() => {
    // mock localStorage
    spyOn(localStorage, 'getItem').and.callFake( (key) => {
        return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake( (key, value) => {
        return store[key] = value + '';
    });
  });

    it('should set an auth-token to localStorage', () => {
      service.setToken(token);

      expect(store['app-token']).toContain('dummy-token');
    });

    it('should get an auth-token from localStorage', () => {
      service.setToken(token);

      expect(service.getToken()).toBe('dummy-token');
    });
});
