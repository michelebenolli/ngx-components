import { Component } from '@angular/core';
import { Action } from 'dist/ngx-components/models/action';

@Component({
  selector: 'app-action-showcase',
  templateUrl: './action-showcase.component.html',
  styleUrls: ['./action-showcase.component.scss']
})
export class ActionShowcaseComponent {

  data = { name: 'test', value: 'data' };

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

  // TODO: Add test action with one item passed! (table)
}
