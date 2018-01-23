import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUT_RANGE_COMBINED_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputRangeCombinedComponent),
    multi: true
};

@Component({
    selector: 'input-range-combined',
    templateUrl: './input-range-combined.component.html',
    styleUrls: ['./input-range-combined.component.scss'],
    providers: [INPUT_RANGE_COMBINED_ACCESSOR]
})
export class InputRangeCombinedComponent implements OnInit, ControlValueAccessor {
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() disabled: boolean = false;
    @Input() label: string;
    @Input() unitLabel: string;
    @Output() onChange = new EventEmitter<any>();
    @Output() onChangeEnd = new EventEmitter<any>();

    public value: number = 0;
    public onModelChange: Function =  () => {};
    public onModelTouched: Function =  () => {};

    constructor() { }

    ngOnInit() {
    }

    writeValue(val: number) {
        this.value = val;
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    setDisabledState(val: boolean): void {
        this.disabled = val;
    }

    changeRangeValue($event) {
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
        this.onChangeEnd.emit(this.value);
    }

    inputValueChange($event) {
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }

    inputChangeEnd($event) {
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
        this.onChangeEnd.emit(this.value);
    }
}
