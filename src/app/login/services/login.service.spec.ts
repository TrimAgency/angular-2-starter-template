import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { MockBackend } from '@angular/http/testing';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';

describe('LoginService', () => {
  let mockbackend, service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
          LoginService,
          // replace XHRBackend class with MockBackend
          { provide: XHRBackend, useClass: MockBackend }
           ]
      });
  }));

  beforeEach(inject([LoginService, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  it('should recieve a JWT from server is login successful', () => {
    const payload = { auth: { email: 'fake@fake.com', password: 'password' } };
    const response = 'JWT1234567890JHFHSJHFSJ';

    mockbackend.connections.subscribe( connection => {
      connection.mockRespond( new Response(new ResponseOptions({body: JSON.stringify(response)})));
    });

    service.login(payload).subscribe(jwt => {
      expect(jwt).toEqual(response);
    });

  });
});
