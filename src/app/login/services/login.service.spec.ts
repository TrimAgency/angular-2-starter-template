import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  let service: LoginService, httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
          LoginService
        ]
      });
  }));

  beforeEach(inject([LoginService, HttpTestingController], (_service, _httpMock) => {
    service = _service;
    httpMock = _httpMock;
  }));

  it('should recieve a JWT from server is login successful', () => {
    const payload = { auth: { email: 'fake@fake.com', password: 'password' } };
    const response = 'JWT1234567890JHFHSJHFSJ';

    service.login('fake@fake.com', 'password').subscribe( data => {
      expect(data).toContain(response);
    });

    const post = httpMock.expectOne(`http://localhost:3000/user_token`);
    expect(post.request.method).toBe('POST');
    post.flush(response);

  });
});
