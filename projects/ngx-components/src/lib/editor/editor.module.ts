import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDITOR, EditorComponent } from './editor/editor.component';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { EditorDirective } from './editor.directive';

@NgModule({
  declarations: [
    EditorComponent,
    EditorDirective
  ],
  providers: [
    { provide: EDITOR, useValue: {} } // TODO: Needed?
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SkeletonModule,
    TabMenuModule,
    NgbOffcanvasModule
  ],
  exports: [
    EditorComponent, // TODO: Needed?
  ]
})
export class EditorModule { }
