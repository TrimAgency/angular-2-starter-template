import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';

@Injectable()
export class SpinnerService {
    spinnerState: Observer<boolean>;
    spinnerControl: Observable<any>;

    constructor() {
        this.spinnerControl = new Observable<boolean>(observer => {
                this.spinnerState = observer;
            });
    }

    show() {
        this.spinnerState.next(true);
    }

    hide() {
        this.spinnerState.next(false);
    }

}