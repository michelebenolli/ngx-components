import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PickerService } from '../picker.service';
import { PickerConfig } from '../../../models/picker-config';
import { Entity } from '../../../models/entity';
import * as i0 from "@angular/core";
export declare class PickerComponent<T extends Entity> implements OnChanges {
    pickerService: PickerService;
    label?: string;
    config: PickerConfig<T>;
    data?: T | T[];
    control?: FormControl;
    disabled?: boolean;
    change: EventEmitter<number | number[] | undefined>;
    items: T[];
    constructor(pickerService: PickerService);
    ngOnChanges(changes: SimpleChanges): void;
    openPicker(): void;
    remove(i: number): void;
    update(): void;
    hasError(name?: string): boolean;
    setValue: (x: T | T[]) => T[];
    getValue: () => number | undefined | number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<PickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PickerComponent<any>, "app-picker", never, { "label": { "alias": "label"; "required": false; }; "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "control": { "alias": "control"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
