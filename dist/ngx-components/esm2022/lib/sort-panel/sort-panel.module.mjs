import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from '../overlay/overlay.module';
import { OverlayModule as CdkOverlayModule } from '@angular/cdk/overlay'; // TODO: Ok?
import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class SortPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, declarations: [SortPanelComponent], imports: [CommonModule, // TODO: NEeded? (in all components), why?
            ButtonModule,
            OverlayModule,
            CdkOverlayModule,
            CdkDrag,
            CdkDropList,
            CheckboxModule,
            FormsModule], exports: [SortPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, imports: [CommonModule, // TODO: NEeded? (in all components), why?
            ButtonModule,
            OverlayModule,
            CdkOverlayModule,
            CheckboxModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL3NvcnQtcGFuZWwvc29ydC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxJQUFJLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUMsQ0FBQyxZQUFZO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFvQjdDLE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxpQkFoQnhCLGtCQUFrQixhQUdsQixZQUFZLEVBQUUsMENBQTBDO1lBQ3hELFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLE9BQU87WUFDUCxXQUFXO1lBQ1gsY0FBYztZQUNkLFdBQVcsYUFHWCxrQkFBa0I7K0dBR1QsZUFBZSxZQWJ4QixZQUFZLEVBQUUsMENBQTBDO1lBQ3hELFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBR2hCLGNBQWM7WUFDZCxXQUFXOzsyRkFNRixlQUFlO2tCQWxCM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLDBDQUEwQzt3QkFDeEQsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsT0FBTzt3QkFDUCxXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSBhcyBDZGtPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknOyAvLyBUT0RPOiBPaz9cbmltcG9ydCB7IFNvcnRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc29ydC1wYW5lbC9zb3J0LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDZGtEcmFnLCBDZGtEcm9wTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb3J0UGFuZWxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgLy8gVE9ETzogTkVlZGVkPyAoaW4gYWxsIGNvbXBvbmVudHMpLCB3aHk/XG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQ2RrT3ZlcmxheU1vZHVsZSxcbiAgICBDZGtEcmFnLFxuICAgIENka0Ryb3BMaXN0LFxuICAgIENoZWNrYm94TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTb3J0UGFuZWxDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0UGFuZWxNb2R1bGUgeyB9XG4iXX0=