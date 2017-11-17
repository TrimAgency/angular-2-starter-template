import { Component, OnInit, Input } from '@angular/core';

import { SpinnerService } from '../services/spinner.service';

@Component({
    selector: 'app-spinner',
    styleUrls: ['spinner.scss'],
    templateUrl: 'spinner.component.html'
})

export class SpinnerComponent implements OnInit {
    spinnerShow = false;

    constructor( private spinnerService: SpinnerService ) { }

    ngOnInit() {
        this.spinnerService.spinnerControl.subscribe(data => {
          console.log(data);
          this.spinnerShow = data;
        });
     }

}
