import { EventEmitter, OnInit, QueryList, TemplateRef } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { FilterRequest } from '../../../models/filter-request';
import { Filter } from '../../../models/filter';
import { TableColumn } from '../../../models/table-column';
import { Action } from '../../../models/action';
import { ColumnDirective } from '../column.directive';
import { ColumnTemplates } from '../column-templates.service';
import * as i0 from "@angular/core";
export declare class TableComponent implements OnInit {
    private tableTemplates;
    columns: TableColumn[];
    params: any;
    actions?: Action[];
    tableActions?: Action[];
    bulkActions?: Action[];
    filters?: Filter[];
    totalItems?: number;
    pageSize?: number;
    set data(value: any[] | undefined);
    changed: EventEmitter<any>;
    onColReordered: EventEmitter<any>;
    templates?: QueryList<ColumnDirective>;
    items?: any[];
    selected?: any[];
    constructor(tableTemplates: ColumnTemplates);
    ngOnInit(): void;
    clearSelection(): void;
    sort(event: SortEvent): void;
    pageChange(event: any): void;
    filter(requests: FilterRequest[]): void;
    getTemplate(name: string): TemplateRef<any> | null;
    onColReorder(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "g-table", never, { "columns": { "alias": "columns"; "required": false; }; "params": { "alias": "params"; "required": false; }; "actions": { "alias": "actions"; "required": false; }; "tableActions": { "alias": "tableActions"; "required": false; }; "bulkActions": { "alias": "bulkActions"; "required": false; }; "filters": { "alias": "filters"; "required": false; }; "totalItems": { "alias": "totalItems"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "changed": "changed"; "onColReordered": "onColReordered"; }, ["templates"], never, false, never>;
}
