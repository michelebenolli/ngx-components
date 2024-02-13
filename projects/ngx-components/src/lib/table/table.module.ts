import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FilterModule } from '../filter'; // TODO: Or filter/module?
import { TableComponent } from './table/table.component';
import { TableModule as PrimengTableModule } from 'primeng/table';
import { ActionModule } from '../action/action.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    // TODO: Keep only needed!!!
    CommonModule,
    ButtonModule,
    FilterModule,
    ActionModule,
    PrimengTableModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
