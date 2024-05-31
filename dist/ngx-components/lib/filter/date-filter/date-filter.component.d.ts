import { EventEmitter } from '@angular/core';
import { Filter } from '../../../models/filter';
import * as i0 from "@angular/core";
export declare class DateFilterComponent {
    filter: Filter;
    changed: EventEmitter<any>;
    clear(): void;
    onChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFilterComponent, "app-date-filter", never, { "filter": { "alias": "filter"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
