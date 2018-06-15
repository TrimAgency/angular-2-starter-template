import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './components/spinner.component';

import { SpinnerService } from './services/spinner.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SpinnerComponent
    ],
    declarations: [
        SpinnerComponent
    ]
})

export class SpinnerModule { }
