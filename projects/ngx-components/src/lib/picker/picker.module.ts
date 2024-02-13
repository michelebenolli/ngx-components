import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { PickerComponent } from './picker/picker.component';
import { MatListModule } from '@angular/material/list';
import { PickerEditorComponent } from './picker-editor/picker-editor.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    PickerComponent,
    PickerEditorComponent
  ],
  imports: [
    MatListModule,
    MatPaginatorModule, // TODO: Substitute with primeng
    // TODO: Keep only needed!!!
    // EditorModule, // TODO. needed?
    CommonModule,
    ButtonModule,
    //SkeletonModule,
    //TabMenuModule,
    //NgbOffcanvasModule
  ],
  exports: [
    PickerComponent,
    PickerEditorComponent
  ]
})
export class PickerModule { }
