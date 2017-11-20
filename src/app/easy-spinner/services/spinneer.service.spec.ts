import { SpinnerService } from './spinner.service';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';

describe('Spinner Service', () => {
    let spinnerService, next;

    beforeAll( () => {
      spinnerService = new SpinnerService();
      spinnerService.spinnerControl.subscribe(data => console.log(data));
      next = spyOn(spinnerService.spinnerState, 'next');
    });

    it('to be defined', () => expect(spinnerService).toBeDefined() );

    it('should turn on the spinner', () => {
        spinnerService.show();
        expect(next).toHaveBeenCalledWith(true);
    });

    it('should turn off the spinner', () => {
        spinnerService.hide();
        expect(next).toHaveBeenCalledWith(false);
    });

});
