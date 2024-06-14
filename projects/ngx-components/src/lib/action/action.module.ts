import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  exports: [
    ActionComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class ActionModule { }
