import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {

    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() disabled: boolean;

    @Output() onChange = new EventEmitter<any>();
    @Output() onChangeEnd = new EventEmitter<any>();

    public value: number = 0;
    public touch;

    public onModelChange: Function = () => { };

    public onModelTouched: Function = () => { };

    constructor() { }

    ngOnInit() {
    }

    writeValue(value: any) {
        this.value = value;
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

    focusOut($event) {
        this.value = this.checkValue(this.value);
        this.updateValue();

        this.onChangeEnd.emit(this.value);
    }

    onKeyUpHandler($event) {
        $event.stopImmediatePropagation();
        if ($event.keyCode === 13) {//enter键
            this.focusOut($event);
        }
    }

    addClick($event) {
        if (this.disabled) return;
        this.value = this.checkValue(this.value + this.step);
        this.touch = setInterval(() => {
            if (this.value < this.max) {
                this.value = this.checkValue(this.value + this.step);
                this.onModelChange(this.value);
            } else {
                this.value = this.max;
            }
        }, 70);
    }

    addEndClick($event) {
        clearInterval(this.touch);
        this.updateValue();
    }

    reduceClick($event) {
        if (this.disabled) return;
        this.value = this.checkValue(this.value - this.step);
        this.touch = setInterval(() => {
            if (this.value > this.min) {
                this.value = this.checkValue(this.value - this.step);
                this.onModelChange(this.value);
            } else {
                this.value = this.min;
            }
        }, 70);
    }

    reduceEndClick($event) {
        clearInterval(this.touch);
        this.updateValue();
    }

    checkValue(value: number): number {
        let val;
        val = (value > this.max) ? this.max : value;
        val = val < this.min ? this.min : val;
        val = this.step < 1 ? Math.round(val * 100) / 100 : Math.round(val);
        return val;
    }

    updateValue() {
        this.onModelChange(this.value);
        this.onChange.emit(this.value);
    }
}
