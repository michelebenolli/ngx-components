import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FilterModule } from '../filter'; // TODO: Or filter/module?
import { TableComponent } from './table/table.component';
import { TableModule as PrimengTableModule } from 'primeng/table';
import { ActionModule } from '../action/action.module';
import { ColumnTemplatesDirective } from './column-templates.directive';
import { ColumnDirective } from './column.directive';

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
    PrimengTableModule,
    ColumnDirective,
    ColumnTemplatesDirective
  ],
  exports: [
    TableComponent,
    ColumnDirective,
    ColumnTemplatesDirective
  ]
})
export class TableModule { }
