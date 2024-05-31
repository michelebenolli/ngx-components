import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { FilterRequest } from '../../../models/filter-request';
import { hasValue } from '../../../utils/utils';
import { Filter } from '../../../models/filter';
import { TableColumn } from '../../../models/table-column';
import { Action } from '../../../models/action';
import { TablePageEvent } from 'primeng/table';
import { DataType } from '../../../models/data-type';
import { TableColumnDirective } from '../table-column.directive';

@Component({
  selector: 'g-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {

  @Input() columns!: TableColumn<T>[];
  @Input() actions?: Action<T>[];
  @Input() globalActions?: Action<T>[];
  @Input() filters?: Filter[];
  @Input() params: any = { };

  @Input() totalItems?: number;
  @Input() pageSize?: number = 10;

  @Input() set data(value: T[] | undefined) { this.items = value }
  @Output() changed = new EventEmitter();
  @ContentChildren(TableColumnDirective) templates?: QueryList<TableColumnDirective>;
  items?: T[];
  DataType = DataType;

  getTemplate(name: string): TemplateRef<any> | null {
    return this.templates?.find(x => x.id === name)?.template ?? null;
  }

  // TODO: What if actions are not empty but all not vsible?
  // Do not show table caption/action column!
  // TODO: CEll height, borders of table

  // TODO: Implement multiple-column sort
  sort(event: SortEvent) {
    const active = this.columns.find(x => x.sort === event.field)?.sort;
    if (active) {
      const direction = event.order == 1 ? 'asc' : 'desc';
      this.params.orderBy = [active + ' ' + direction];
      this.changed.emit(this.params);
    }
  }

  pageChange(event: TablePageEvent) {
    this.params.pageNumber = event.first / event.rows + 1;
    this.params.pageSize = event.rows;
    this.changed.emit(this.params);
  }

  // TODO: Page not changed when filter!!
  filter(requests: FilterRequest[]) {
    if (this.totalItems) this.params.pageNumber = 1;
    this.params.filters = requests.filter(x => hasValue(x));
    this.changed.emit(this.params);
  }
}
