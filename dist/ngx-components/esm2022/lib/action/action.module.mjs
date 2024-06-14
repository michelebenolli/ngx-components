import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import * as i0 from "@angular/core";
export class ActionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, declarations: [ActionComponent], imports: [CommonModule,
            MenuModule,
            ButtonModule,
            ConfirmDialogModule], exports: [ActionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, providers: [
            ConfirmationService
        ], imports: [CommonModule,
            MenuModule,
            ButtonModule,
            ConfirmDialogModule] }); }
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
                        ButtonModule,
                        ConfirmDialogModule
                    ],
                    exports: [
                        ActionComponent
                    ],
                    providers: [
                        ConfirmationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvYWN0aW9uL2FjdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFtQmxELE1BQU0sT0FBTyxZQUFZOzhHQUFaLFlBQVk7K0dBQVosWUFBWSxpQkFmckIsZUFBZSxhQUdmLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWTtZQUNaLG1CQUFtQixhQUduQixlQUFlOytHQU1OLFlBQVksYUFKWjtZQUNULG1CQUFtQjtTQUNwQixZQVZDLFlBQVk7WUFDWixVQUFVO1lBQ1YsWUFBWTtZQUNaLG1CQUFtQjs7MkZBU1YsWUFBWTtrQkFqQnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9tZW51JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NvbmZpcm1kaWFsb2cnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWN0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWVudU1vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGUsXG4gICAgQ29uZmlybURpYWxvZ01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWN0aW9uQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbmZpcm1hdGlvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25Nb2R1bGUgeyB9XG4iXX0=