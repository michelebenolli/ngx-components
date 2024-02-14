import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionModule, OverlayModule, EditorModule, PickerModule, TableModule, FilterModule } from 'ngx-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule as CdkOverlayModule } from '@angular/cdk/overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorContentComponent } from './editor-showcase/editor-content/editor-content.component';
import { TableShowcaseComponent } from './table-showcase/table-showcase.component';
import { ActionShowcaseComponent } from './action-showcase/action-showcase.component';
import { PickerShowcaseComponent } from './picker-showcase/picker-showcase.component';
import { EditorShowcaseComponent } from './editor-showcase/editor-showcase.component';
import { FilterShowcaseComponent } from './filter-showcase/filter-showcase.component'; // TODO: avoid...
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    EditorContentComponent,
    TableShowcaseComponent,
    ActionShowcaseComponent,
    PickerShowcaseComponent,
    EditorShowcaseComponent,
    FilterShowcaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ActionModule,
    OverlayModule,
    CdkOverlayModule,
    ButtonModule,
    EditorModule,
    PickerModule,
    FilterModule,
    TableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
