import { Injectable } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';


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