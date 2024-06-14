import { AfterContentInit, QueryList } from '@angular/core';
import { ColumnDirective } from './column.directive';
import { ColumnTemplates } from './column-templates.service';
import * as i0 from "@angular/core";
/**
 * Directive allowing to register default templates for table columns.
 * It is supposed to be used once, typically in the root component. Example of usage:
 * <g-column-templates>
 *   <ng-template g-column="date" let-item let-column="column">{{ column.value(item) | date }}</ng-template>
 *   <ng-template g-column="age" let-item let-column="column">{{ column.value(item) | number }}</ng-template>
 * </g-column-templates>
 */
export declare class ColumnTemplatesDirective implements AfterContentInit {
    private columnTemplates;
    directives: QueryList<ColumnDirective>;
    constructor(columnTemplates: ColumnTemplates);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnTemplatesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnTemplatesDirective, "g-column-templates", never, {}, {}, ["directives"], never, true, never>;
}
