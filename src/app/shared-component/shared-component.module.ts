import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNumberComponent } from './component/input-number/input-number.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        InputNumberComponent
    ],
    exports: [
        InputNumberComponent
    ]
})
export class SharedComponentModule { }
