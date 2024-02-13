import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from '../overlay/overlay.module';
import { OverlayModule as CdkOverlayModule } from '@angular/cdk/overlay'; // TODO: Ok?
import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SortPanelComponent
  ],
  imports: [
    CommonModule, // TODO: NEeded? (in all components), why?
    ButtonModule,
    OverlayModule,
    CdkOverlayModule,
    CdkDrag,
    CdkDropList,
    CheckboxModule,
    FormsModule
  ],
  exports: [
    SortPanelComponent
  ]
})
export class SortPanelModule { }
