import { ContentChildren, Directive } from '@angular/core';
import { ColumnDirective } from './column.directive';
import * as i0 from "@angular/core";
import * as i1 from "./column-templates.service";
/**
 * Directive allowing to register default templates for table columns.
 * It is supposed to be used once, typically in the root component. Example of usage:
 * <g-column-templates>
 *   <ng-template g-column="date" let-item let-column="column">{{ column.value(item) | date }}</ng-template>
 *   <ng-template g-column="age" let-item let-column="column">{{ column.value(item) | number }}</ng-template>
 * </g-column-templates>
 */
export class ColumnTemplatesDirective {
    constructor(columnTemplates) {
        this.columnTemplates = columnTemplates;
    }
    ngAfterContentInit() {
        this.columnTemplates.directives = this.directives.toArray();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplatesDirective, deps: [{ token: i1.ColumnTemplates }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.0", type: ColumnTemplatesDirective, isStandalone: true, selector: "g-column-templates", queries: [{ propertyName: "directives", predicate: ColumnDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplatesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'g-column-templates',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.ColumnTemplates }], propDecorators: { directives: [{
                type: ContentChildren,
                args: [ColumnDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRlbXBsYXRlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL3RhYmxlL2NvbHVtbi10ZW1wbGF0ZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUdyRDs7Ozs7OztHQU9HO0FBS0gsTUFBTSxPQUFPLHdCQUF3QjtJQUdwQyxZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpELGtCQUFrQjtRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdELENBQUM7OEdBUFcsd0JBQXdCO2tHQUF4Qix3QkFBd0IseUdBRW5CLGVBQWU7OzJGQUZwQix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsVUFBVSxFQUFFLElBQUk7aUJBQ2hCO29GQUdrQyxVQUFVO3NCQUEzQyxlQUFlO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbHVtblRlbXBsYXRlcyB9IGZyb20gJy4vY29sdW1uLXRlbXBsYXRlcy5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBEaXJlY3RpdmUgYWxsb3dpbmcgdG8gcmVnaXN0ZXIgZGVmYXVsdCB0ZW1wbGF0ZXMgZm9yIHRhYmxlIGNvbHVtbnMuIFxyXG4gKiBJdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIG9uY2UsIHR5cGljYWxseSBpbiB0aGUgcm9vdCBjb21wb25lbnQuIEV4YW1wbGUgb2YgdXNhZ2U6XHJcbiAqIDxnLWNvbHVtbi10ZW1wbGF0ZXM+XHJcbiAqICAgPG5nLXRlbXBsYXRlIGctY29sdW1uPVwiZGF0ZVwiIGxldC1pdGVtIGxldC1jb2x1bW49XCJjb2x1bW5cIj57eyBjb2x1bW4udmFsdWUoaXRlbSkgfCBkYXRlIH19PC9uZy10ZW1wbGF0ZT5cclxuICogICA8bmctdGVtcGxhdGUgZy1jb2x1bW49XCJhZ2VcIiBsZXQtaXRlbSBsZXQtY29sdW1uPVwiY29sdW1uXCI+e3sgY29sdW1uLnZhbHVlKGl0ZW0pIHwgbnVtYmVyIH19PC9uZy10ZW1wbGF0ZT5cclxuICogPC9nLWNvbHVtbi10ZW1wbGF0ZXM+IFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdnLWNvbHVtbi10ZW1wbGF0ZXMnLFxyXG5cdHN0YW5kYWxvbmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbHVtblRlbXBsYXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuXHRAQ29udGVudENoaWxkcmVuKENvbHVtbkRpcmVjdGl2ZSkgZGlyZWN0aXZlcyE6IFF1ZXJ5TGlzdDxDb2x1bW5EaXJlY3RpdmU+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uVGVtcGxhdGVzOiBDb2x1bW5UZW1wbGF0ZXMpIHsgfVxyXG5cclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbHVtblRlbXBsYXRlcy5kaXJlY3RpdmVzID0gdGhpcy5kaXJlY3RpdmVzLnRvQXJyYXkoKTtcclxuXHR9XHJcbn0iXX0=