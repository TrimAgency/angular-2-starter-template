import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { Observable, of } from 'rxjs';
import { SpinnerComponent } from './spinner.component';

import { SpinnerService } from '../services/spinner.service';


class MockService {
    spinnerControl = of(false);
}

describe('SpinnerComponent', () => {
  let fixture, comp, el, service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpinnerComponent
      ],
      providers: [
          { provide: SpinnerService, useClass: MockService }
      ]
    }).compileComponents();
  }));

  beforeEach( () => {
      service = TestBed.get(SpinnerService);

      fixture = TestBed.createComponent(SpinnerComponent);
      comp = fixture.debugElement.componentInstance;
      el = fixture.debugElement.query(By.css('.spinner-background-wrap'));

      fixture.detectChanges(); // first detectChanges run bindings and ngOnInit

  });

  it('should be defined', async( () => {
      expect(comp).toBeDefined();
  }));

  it('should not be displayed by default', () => {
    expect(el).toBe(null);
  });

  it('should display spinner', () => {
      comp.spinnerShow = true;
      fixture.detectChanges();  // detect binding change

      expect(el).toBeDefined();
  });


});
