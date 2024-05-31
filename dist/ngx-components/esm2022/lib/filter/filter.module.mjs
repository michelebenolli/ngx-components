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
import * as i0 from "@angular/core";
export class FilterModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, declarations: [FilterComponent,
            TextFilterComponent,
            DateFilterComponent,
            SelectFilterComponent], imports: [CommonModule,
            ButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatTooltipModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            OverlayModule,
            // TODO: Date is in the right format?
            FormsModule,
            ReactiveFormsModule], exports: [FilterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, providers: [
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
        ], imports: [CommonModule,
            ButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatTooltipModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            OverlayModule,
            // TODO: Date is in the right format?
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvZmlsdGVyL2ZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQXlDN0csTUFBTSxPQUFPLFlBQVk7OEdBQVosWUFBWTsrR0FBWixZQUFZLGlCQXJDckIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIscUJBQXFCLGFBR3JCLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IscUNBQXFDO1lBQ3JDLFdBQVc7WUFDWCxtQkFBbUIsYUFrQm5CLGVBQWU7K0dBR04sWUFBWSxhQW5CWjtZQUNULDZDQUE2QztZQUM3Qyx3R0FBd0c7WUFDeEcsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQ2hGLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1lBQy9DLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7WUFDdkQsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFO29CQUNuQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsU0FBUyxFQUFFLFlBQVk7d0JBQ3ZCLGNBQWMsRUFBRSxVQUFVO3FCQUMzQjtpQkFDRjthQUNGO1NBQ0YsWUExQkMsWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixxQ0FBcUM7WUFDckMsV0FBVztZQUNYLG1CQUFtQjs7MkZBcUJWLFlBQVk7a0JBdkN4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IscUNBQXFDO3dCQUNyQyxXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULDZDQUE2Qzt3QkFDN0Msd0dBQXdHO3dCQUN4RyxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQUU7d0JBQ2hGLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO3dCQUMvQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO3dCQUN2RCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUU7Z0NBQ25DLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0NBQ3pCLE9BQU8sRUFBRTtvQ0FDUCxTQUFTLEVBQUUsWUFBWTtvQ0FDdkIsY0FBYyxFQUFFLFVBQVU7aUNBQzNCOzZCQUNGO3lCQUNGO3FCQUNGO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTUFUX0ZPUk1fRklFTERfREVGQVVMVF9PUFRJT05TLCBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1maWx0ZXIvdGV4dC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtZmlsdGVyL2RhdGUtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1maWx0ZXIvc2VsZWN0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICBUZXh0RmlsdGVyQ29tcG9uZW50LFxuICAgIERhdGVGaWx0ZXJDb21wb25lbnQsXG4gICAgU2VsZWN0RmlsdGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgLy8gVE9ETzogRGF0ZSBpcyBpbiB0aGUgcmlnaHQgZm9ybWF0P1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gVE9ETzogVGhlIHBvc2l0aW9uIG9mIHRoZSBhZGFwdGVyIGlzIHRoaXM/XG4gICAgLy8gVE9ETzogUmVtb3ZlIGZyb20gdGhlcmUgYW5kIHB1dCBpbiBtYWluIGFwcGxpY2F0aW9uPyAoYnV0IGNvbnNvbGUgZXJyb3IgaWYgYWRhcHRlciBub3QgZGVmaW5lZCB0aGVyZSlcbiAgICB7IHByb3ZpZGU6IE1BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IHsgYXBwZWFyYW5jZTogJ291dGxpbmUnIH0gfSxcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdpdC1JVCcgfSxcbiAgICB7IHByb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTWF0TmF0aXZlRGF0ZU1vZHVsZSB9LFxuICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IHtcbiAgICAgICAgcGFyc2U6IHsgZGF0ZUlucHV0OiAnTCcgfSxcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIGRhdGVJbnB1dDogJ0REL01NL1lZWVknLFxuICAgICAgICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWx0ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNb2R1bGUgeyB9XG4iXX0=