import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FilterModule } from '../filter'; // TODO: Or filter/module?
import { TableComponent } from './table/table.component';
import { TableModule as PrimengTableModule } from 'primeng/table';
import { ActionModule } from '../action/action.module';
import * as i0 from "@angular/core";
export class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: TableModule, declarations: [TableComponent], imports: [
            // TODO: Keep only needed!!!
            CommonModule,
            ButtonModule,
            FilterModule,
            ActionModule,
            PrimengTableModule], exports: [TableComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, imports: [
            // TODO: Keep only needed!!!
            CommonModule,
            ButtonModule,
            FilterModule,
            ActionModule,
            PrimengTableModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL2xpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUMsQ0FBQywwQkFBMEI7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLElBQUksa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWtCdkQsTUFBTSxPQUFPLFdBQVc7OEdBQVgsV0FBVzsrR0FBWCxXQUFXLGlCQWRwQixjQUFjO1lBR2QsNEJBQTRCO1lBQzVCLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0IsYUFHbEIsY0FBYzsrR0FHTCxXQUFXO1lBWHBCLDRCQUE0QjtZQUM1QixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCOzsyRkFNVCxXQUFXO2tCQWhCdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1QixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlcic7IC8vIFRPRE86IE9yIGZpbHRlci9tb2R1bGU/XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIGFzIFByaW1lbmdUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHsgQWN0aW9uTW9kdWxlIH0gZnJvbSAnLi4vYWN0aW9uL2FjdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgLy8gVE9ETzogS2VlcCBvbmx5IG5lZWRlZCEhIVxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIEFjdGlvbk1vZHVsZSxcbiAgICBQcmltZW5nVGFibGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XG4iXX0=