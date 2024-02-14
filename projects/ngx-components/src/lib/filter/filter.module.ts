import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OverlayModule } from '../overlay/overlay.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

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
  providers: [
    // TODO: The position of the adapter is this?
    // TODO: Remove from there and put in main application? (but console error if adapter not defined there)
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    { provide: DateAdapter, useClass: MatNativeDateModule },
    { provide: MAT_DATE_FORMATS, useValue: {
        parse: { dateInput: 'L' },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY'
        }
      }
    }
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
