import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNumberComponent } from './component/input-number/input-number.component';
import { InputRangeCombinedComponent } from './component/input-range-combined/input-range-combined.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        InputNumberComponent,
        InputRangeCombinedComponent
    ],
    exports: [
        InputNumberComponent,
        InputRangeCombinedComponent
    ]
})
export class SharedComponentModule { }
