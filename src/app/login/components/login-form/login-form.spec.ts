import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';
import { User } from '../../models/user.interface';

describe('LoginFormComponent', () => {
  let fixture, component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        LoginFormComponent   ]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the login-form component', () => {
    expect(component).toBeDefined();
  });

  it('should call submit event if form valid', () => {
   const user = { email: 'faker@fake.com', password: 'password' };
   spyOn(component.submitLogin, 'emit');
   component.login(user, true);

   fixture.detectChanges();
   expect(component.submitLogin.emit).toHaveBeenCalled();
  });
  it('should not call submit event if form invalid', () => {
    const user = { email: 'faker@fake.com', password: 'password' };
    spyOn(component.submitLogin, 'emit');
    component.login(user, false);

    fixture.detectChanges();
    expect(component.submitLogin.emit).not.toHaveBeenCalled();
  });

});

