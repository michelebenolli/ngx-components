import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'dist/ngx-components/models/table-column';
import { Fruit, tableData } from './table-data';
import { Action } from 'dist/ngx-components/models/action';
import { PagedRequest } from 'dist/ngx-components/models/paged-request';
import { PagedList } from 'dist/ngx-components/models/paged-list';
import { Filter } from 'dist/ngx-components/models/filter';

@Component({
  selector: 'app-table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss']
})
export class TableShowcaseComponent implements OnInit {

  items?: PagedList<Fruit>;

  // TODO: try different types
  columns: TableColumn<Fruit>[] = [
    { name: 'Id', value: x => x.id, sort: 'id' },
    { name: 'Nome', value: x => x.name, sort: 'name' },
    { name: 'Colore', value: x => x.color }
  ];

  actions: Action[] = [
    { name: 'Crea', icon: 'bi bi-plus-lg', action: () => this.testLog() },
    { name: 'Modifica', icon: 'bi bi-pencil', action: this.testLog },
    { name: 'Test', icon: 'bi bi-circle', action: this.testLog.bind(this) },
    { name: 'Altro', icon: 'bi bi-three-dots-vertical', items: [
      { name: 'Crea', icon: 'bi bi-plus-lg' },
      { name: 'Modifica', icon: 'bi bi-pencil' }
    ] }
  ];

  testLog(data?: any) {
    console.log('good log!');
    console.log(data);
  }

  filters: Filter[] = [];

  ngOnInit(): void {
    // TODO: Try also with not-paged items
    this.items = {
      data: tableData,
      currentPage: 1,
      totalPages: 1,
      totalCount: 3,
      pageSize: 10
    };
  }

  test(fruit?: Fruit) {
    console.log('test called');
    console.log(fruit);
  }

  getItems(params?: PagedRequest) {
    console.log('get items called');
  }
}
