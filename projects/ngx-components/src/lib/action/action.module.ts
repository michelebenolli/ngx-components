import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    MatTooltipModule
  ],
  exports: [
    ActionComponent
  ]
})
export class ActionModule { }
