import { EventEmitter, Injector, OnInit } from '@angular/core';
import { RepositoryService } from '../../../services/repository.service';
import { Filter } from '../../../models/filter';
import { FilterOption } from '../../../models/filter-option';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SelectFilterComponent implements OnInit {
    private injector;
    filter: Filter;
    changed: EventEmitter<any>;
    service: RepositoryService;
    options: FilterOption[];
    control: FormControl<string | null>;
    constructor(injector: Injector);
    ngOnInit(): void;
    getOptions(): void;
    onInput(): void;
    clear(): void;
    onChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectFilterComponent, "app-select-filter", never, { "filter": { "alias": "filter"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
