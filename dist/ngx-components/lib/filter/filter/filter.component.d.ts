import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Filter } from '../../../models/filter';
import { FilterRequest } from '../../../models/filter-request';
import { OverlayComponent } from '../../overlay';
import * as i0 from "@angular/core";
export declare class FilterComponent implements OnInit, OnDestroy {
    filters?: Filter[];
    onFilter: EventEmitter<FilterRequest[]>;
    overlay?: OverlayComponent;
    hasFilters: boolean;
    hasOverlayFilters: boolean;
    ngOnInit(): void;
    apply(filter?: Filter): void;
    clear(): void;
    getRequests(): FilterRequest[] | undefined;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "app-filter", never, { "filters": { "alias": "filters"; "required": false; }; }, { "onFilter": "onFilter"; }, never, never, false, never>;
}
