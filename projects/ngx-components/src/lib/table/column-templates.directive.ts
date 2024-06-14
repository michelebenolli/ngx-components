import { AfterContentInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { ColumnDirective } from './column.directive';
import { ColumnTemplates } from './column-templates.service';

/**
 * Directive allowing to register default templates for table columns. 
 * It is supposed to be used once, typically in the root component. Example of usage:
 * <g-column-templates>
 *   <ng-template g-column="date" let-item let-column="column">{{ column.value(item) | date }}</ng-template>
 *   <ng-template g-column="age" let-item let-column="column">{{ column.value(item) | number }}</ng-template>
 * </g-column-templates> 
 */
@Directive({
	selector: 'g-column-templates',
	standalone: true
})
export class ColumnTemplatesDirective implements AfterContentInit {

	@ContentChildren(ColumnDirective) directives!: QueryList<ColumnDirective>;
	constructor(private columnTemplates: ColumnTemplates) { }

	ngAfterContentInit(): void {
		this.columnTemplates.directives = this.directives.toArray();
	}
}