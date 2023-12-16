import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Action } from './models/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  
  @Input() actions?: Action[];
  @Input() data?: any;
  @ContentChild('template') template?: TemplateRef<any>;
  items?: MenuItem[];

  ngOnInit() {
    this.items = this.actions?.map(x => this.getItem(x));
  }

  private getItem(action: Action): MenuItem {
    return {
      label: action.name,
      icon: action.icon ? 'bi bi-' + action.icon : undefined,
      command: () => action.action?.(this.data),
      items: action.items?.map(x => this.getItem(x)),
      visible: action.show?.(this.data) !== false
    }
  }
}
