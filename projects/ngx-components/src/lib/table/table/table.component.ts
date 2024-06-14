import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { FilterRequest } from '../../../models/filter-request';
import { hasValue } from '../../../utils/utils';
import { Filter } from '../../../models/filter';
import { TableColumn } from '../../../models/table-column';
import { Action } from '../../../models/action';
import { ColumnDirective } from '../column.directive';
import { ColumnTemplates } from '../column-templates.service';

@Component({
  selector: 'g-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns!: TableColumn[];
  @Input() params: any = { };
  @Input() actions?: Action[];
  @Input() tableActions?: Action[];
  @Input() bulkActions?: Action[];
  @Input() filters?: Filter[];
  @Input() totalItems?: number;
  @Input() pageSize?: number = 10;
  @Input() set data(value: any[] | undefined) { this.items = value }

  @Output() changed = new EventEmitter();
  @Output() onColReordered = new EventEmitter<any>();
  @ContentChildren(ColumnDirective) templates?: QueryList<ColumnDirective>;
  items?: any[];
  selected?: any[];

  constructor(private tableTemplates: ColumnTemplates) { }

  ngOnInit() {
    this.params.filters = this.filters?.map(x => x.request)?.filter(x => hasValue(x));
  }

  clearSelection() {
    this.selected = [];
  }

  sort(event: SortEvent) {
    const direction = (event.order == 1) ? 'asc' : 'desc';
    this.params.orderBy = event.field?.split(' ')?.map(x => x + ' ' + direction);
    this.changed.emit(this.params);
  }

  pageChange(event: any) {
    this.params.pageNumber = event.first / event.rows + 1;
    this.params.pageSize = event.rows;
    this.changed.emit(this.params);
  }

  filter(requests: FilterRequest[]) {
    this.params.pageNumber = 1;
    this.params.filters = requests.filter(x => hasValue(x));
    this.changed.emit(this.params);
  }

  // TODO: Called too many times... replace it with a array of templates
  // To populate when the component loads...
  getTemplate(name: string): TemplateRef<any> | null {
    return this.templates?.find(x => x.id === name)?.template ??
      this.tableTemplates.directives.find(x => x.id === name)?.template ?? null;
  }

  onColReorder(event: any) {
    this.onColReordered.emit(event);
  }
}
