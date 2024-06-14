import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Action } from '../../../models/action';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'g-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  
  @Input() actions?: Action[];
  @Input() data?: any;
  @ContentChild('template') template?: TemplateRef<any>;
  items?: MenuItem[];
  key = Math.random().toString(36).substring(2, 10);

  constructor(
    private confirmationService: ConfirmationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.items = this.actions
      ?.filter(x => !x.permissions || this.authService.isAuthorized(x.permissions))
      .map(x => this.getItem(x));
  }

  openAction(item: MenuItem) {
    console.log('open action called');

    if (item.state?.['confirm']) this.confirm(item);
    else item.state?.['action']?.action?.(this.data);
  }

  confirm(item: MenuItem) {
    console.log('confirm called');

    this.confirmationService.confirm({
      key: this.key,
      header: 'Conferma',
      message: 'Confermi di voler effettuare l\'azione?',
      accept: () => {
        item.state?.['action']?.action?.(this.data);
        this.confirmationService.close();
      },
      reject: () => this.confirmationService.close()
    });
  }

  private getItem(action: Action): MenuItem {
    return {
      label: action.name,
      icon: action.icon,
      items: action.items?.map(x => this.getItem(x)),
      visible: action.show?.(this.data) !== false,
      state: { action, confirm: action.confirm }, // TODO: Action in state needed?
      command: () => action.action?.(this.data) // TODO: Confirm does not work with sub-menu items!
    }
  }
}