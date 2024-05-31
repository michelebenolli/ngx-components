import { EventEmitter } from '@angular/core';
import { Filter } from '../../../models/filter';
import * as i0 from "@angular/core";
export declare class TextFilterComponent {
    filter: Filter;
    changed: EventEmitter<any>;
    value?: string;
    clear(): void;
    onInput(): void;
    setValue(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextFilterComponent, "app-text-filter", never, { "filter": { "alias": "filter"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
