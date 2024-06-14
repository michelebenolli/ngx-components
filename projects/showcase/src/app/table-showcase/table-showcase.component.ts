import { Component, OnInit } from '@angular/core';
import { Action } from 'dist/ngx-components/models/action';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';
import { TableColumn } from 'ngx-components/src/models/table-column';
import { Filter } from 'ngx-components/src/models/filter';
import { EditorService } from 'ngx-components';
import { EditorContentComponent } from '../editor-showcase/editor-content/editor-content.component';
import { PagedList } from 'ngx-components/src/models/paged-list';

@Component({
  selector: 'app-table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss']
})
export class TableShowcaseComponent implements OnInit {

  items?: PagedList<User>;
  filters: Filter[] = [];

  constructor(
    private userService: UserService,
    private editorService: EditorService) { }

  columns: TableColumn[] = [
    { name: 'Id', value: x => x.id, sort: 'id' },
    { name: 'Name', value: x => x.firstName + ' ' + x.lastName, sort: 'firstName lastName' },
    { name: 'Birthdate', value: x => x.birthdate, sort: 'birthdate', template: 'birthDate' },
    { name: 'Role', value: x => x.role, sort: 'role' },
    { name: 'Gender', value: x => x.gender, sort: 'gender' },
    { name: 'Disabled', value: x => x.disabled, sort: 'disabled', template: 'bool' }
  ];

  tableActions: Action[] = [
    { name: 'Create', icon: 'bi bi-plus-lg', action: () => this.openEditor() },
  ];

  // TODO: Test confirmation in actions...
  actions: Action[] = [
    { name: 'Edit', icon: 'bi bi-pencil', action: (x: User) => this.openEditor(x) },
    { name: 'Test', icon: 'bi bi-circle', action: this.testLog.bind(this) },
    { name: 'Other', icon: 'bi bi-three-dots-vertical', items: [
      { name: 'Delete', icon: 'bi bi-trash', action: x => this.remove(x), confirm: { message: 'Vuoi cancellare? '} },
      { name: 'Enable', icon: 'bi bi-plus-lg' },
      { name: 'Disable', icon: 'bi bi-pencil' }
    ]}
  ];

  ngOnInit() {
    this.getItems();
  }

  getItems(params: any = {}) {
    this.userService.search(params).subscribe(x => this.items = x);
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

  remove(user: User) {
    this.userService.delete(user.id).subscribe(() => {
      this.getItems();
      // TODO this.notification.success('message.deleted');
    });
  }
}
