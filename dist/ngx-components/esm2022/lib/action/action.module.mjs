import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import * as i0 from "@angular/core";
export class ActionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, declarations: [ActionComponent], imports: [CommonModule,
            MenuModule,
            ButtonModule], exports: [ActionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, imports: [CommonModule,
            MenuModule,
            ButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ActionComponent
                    ],
                    imports: [
                        CommonModule,
                        MenuModule,
                        ButtonModule
                    ],
                    exports: [
                        ActionComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvYWN0aW9uL2FjdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQWU5QyxNQUFNLE9BQU8sWUFBWTs4R0FBWixZQUFZOytHQUFaLFlBQVksaUJBWHJCLGVBQWUsYUFHZixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVksYUFHWixlQUFlOytHQUdOLFlBQVksWUFSckIsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZOzsyRkFNSCxZQUFZO2tCQWJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7cUJBQ2hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVNb2R1bGUgfSBmcm9tICdwcmltZW5nL21lbnUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNZW51TW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWN0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uTW9kdWxlIHsgfVxuIl19