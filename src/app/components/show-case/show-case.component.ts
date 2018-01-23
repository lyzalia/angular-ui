import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-show-case',
    templateUrl: './show-case.component.html',
    styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

    public inputValue: number = 0;
    public disabledValue: number = 0;

    public inputRangeValue: number = 0;

    constructor() { }

    ngOnInit() {
    }

    inputValueChange($event) {
        console.log('inputValueChange', $event, this.inputValue);
    }

    inputChangeEnd($event) {
        console.log('inputChangeEnd', $event, this.inputValue);
    }

    changeInputRange($event) {
        console.log('changeInputRange', $event, this.inputRangeValue);
    }

    changeInputRangeEnd($event) {
        console.log('changeInputRangeEnd', $event, this.inputRangeValue);
    }
}
