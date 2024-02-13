import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OverlayModule } from '../overlay/overlay.module';

@NgModule({
  declarations: [
    FilterComponent,
    TextFilterComponent,
    DateFilterComponent,
    SelectFilterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    OverlayModule,
    // TODO: Date is in the right format?
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
