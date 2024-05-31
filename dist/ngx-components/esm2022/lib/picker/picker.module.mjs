import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PickerComponent } from './picker/picker.component';
import { MatListModule } from '@angular/material/list';
import { PickerEditorComponent } from './picker-editor/picker-editor.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export class PickerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, declarations: [PickerComponent,
            PickerEditorComponent], imports: [MatListModule,
            MatPaginatorModule, // TODO: Substitute with primeng
            // TODO: Keep only needed!!!
            // EditorModule, // TODO. needed?
            CommonModule,
            ButtonModule], exports: [PickerComponent,
            PickerEditorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, imports: [MatListModule,
            MatPaginatorModule, // TODO: Substitute with primeng
            // TODO: Keep only needed!!!
            // EditorModule, // TODO. needed?
            CommonModule,
            ButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PickerComponent,
                        PickerEditorComponent
                    ],
                    imports: [
                        MatListModule,
                        MatPaginatorModule, // TODO: Substitute with primeng
                        // TODO: Keep only needed!!!
                        // EditorModule, // TODO. needed?
                        CommonModule,
                        ButtonModule,
                        //SkeletonModule,
                        //TabMenuModule,
                        //NgbOffcanvasModule
                    ],
                    exports: [
                        PickerComponent,
                        PickerEditorComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvcGlja2VyL3BpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBdUJqRSxNQUFNLE9BQU8sWUFBWTs4R0FBWixZQUFZOytHQUFaLFlBQVksaUJBbkJyQixlQUFlO1lBQ2YscUJBQXFCLGFBR3JCLGFBQWE7WUFDYixrQkFBa0IsRUFBRSxnQ0FBZ0M7WUFDcEQsNEJBQTRCO1lBQzVCLGlDQUFpQztZQUNqQyxZQUFZO1lBQ1osWUFBWSxhQU1aLGVBQWU7WUFDZixxQkFBcUI7K0dBR1osWUFBWSxZQWZyQixhQUFhO1lBQ2Isa0JBQWtCLEVBQUUsZ0NBQWdDO1lBQ3BELDRCQUE0QjtZQUM1QixpQ0FBaUM7WUFDakMsWUFBWTtZQUNaLFlBQVk7OzJGQVVILFlBQVk7a0JBckJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCLEVBQUUsZ0NBQWdDO3dCQUNwRCw0QkFBNEI7d0JBQzVCLGlDQUFpQzt3QkFDakMsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLHFCQUFxQjtxQkFDdEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nYk9mZmNhbnZhc01vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IFNrZWxldG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9za2VsZXRvbic7XG5pbXBvcnQgeyBUYWJNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJtZW51JztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgUGlja2VyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXItZWRpdG9yL3BpY2tlci1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBpY2tlckNvbXBvbmVudCxcbiAgICBQaWNrZXJFZGl0b3JDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLCAvLyBUT0RPOiBTdWJzdGl0dXRlIHdpdGggcHJpbWVuZ1xuICAgIC8vIFRPRE86IEtlZXAgb25seSBuZWVkZWQhISFcbiAgICAvLyBFZGl0b3JNb2R1bGUsIC8vIFRPRE8uIG5lZWRlZD9cbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIC8vU2tlbGV0b25Nb2R1bGUsXG4gICAgLy9UYWJNZW51TW9kdWxlLFxuICAgIC8vTmdiT2ZmY2FudmFzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQaWNrZXJDb21wb25lbnQsXG4gICAgUGlja2VyRWRpdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyTW9kdWxlIHsgfVxuIl19