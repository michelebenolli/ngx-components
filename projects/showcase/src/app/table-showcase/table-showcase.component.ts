import { Component, OnInit } from '@angular/core';
import { Action } from 'dist/ngx-components/models/action';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';
import { TableColumn } from 'ngx-components/src/models/table-column';
import { Filter } from 'ngx-components/src/models/filter';
import { DataType } from 'ngx-components/src/models/data-type';
import { EditorService } from 'ngx-components';
import { EditorContentComponent } from '../editor-showcase/editor-content/editor-content.component';

@Component({
  selector: 'app-table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss']
})
export class TableShowcaseComponent implements OnInit {

  items?: User[];
  filters: Filter[] = [];

  constructor(
    private userService: UserService,
    private editorService: EditorService) { }

  columns: TableColumn[] = [
    { name: 'Id', value: x => x.id, sort: 'id' },
    { name: 'Name', value: x => x.name, sort: 'name' },
    { name: 'Birthdate', value: x => x.birthdate, type: DataType.Date, sort: 'birthdate' },
    { name: 'Role', value: x => x.role, sort: 'role' },
    { name: 'Gender', value: x => x.gender, sort: 'gender' },
    { name: 'Disabled', value: x => x.disabled, type: DataType.Bool }
  ];

  tableActions: Action[] = [
    { name: 'Create', icon: 'bi bi-plus-lg', action: () => this.openEditor() },
  ];

  actions: Action[] = [
    { name: 'Edit', icon: 'bi bi-pencil', action: x => this.openEditor(x) },
    { name: 'Delete', icon: 'bi bi-circle', action: this.testLog.bind(this) },
    { name: 'Other', icon: 'bi bi-three-dots-vertical', items: [
      { name: 'Enable', icon: 'bi bi-plus-lg' },
      { name: 'Disable', icon: 'bi bi-pencil' }
    ]}
  ];

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = this.userService.getAll();
  }

  openEditor(user?: User) {
    const config = { title: 'Create user' };
    this.editorService.open(EditorContentComponent, config);
    this.editorService.closed.subscribe(() => {
      console.log('editor closed!!!'); // TODO: Add notificationService
    });
  }

  testLog(){
    console.log("sss");
  }
}
