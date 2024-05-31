import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDITOR, EditorComponent } from './editor/editor.component';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { EditorDirective } from './editor.directive';
import * as i0 from "@angular/core";
export class EditorModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, declarations: [EditorComponent,
            EditorDirective], imports: [CommonModule,
            ButtonModule,
            SkeletonModule,
            TabMenuModule,
            NgbOffcanvasModule], exports: [EditorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, providers: [
            { provide: EDITOR, useValue: {} } // TODO: Needed?
        ], imports: [CommonModule,
            ButtonModule,
            SkeletonModule,
            TabMenuModule,
            NgbOffcanvasModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvZWRpdG9yL2VkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBcUJyRCxNQUFNLE9BQU8sWUFBWTs4R0FBWixZQUFZOytHQUFaLFlBQVksaUJBakJyQixlQUFlO1lBQ2YsZUFBZSxhQU1mLFlBQVk7WUFDWixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7WUFDYixrQkFBa0IsYUFHbEIsZUFBZTsrR0FHTixZQUFZLGFBZFo7WUFDVCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLGdCQUFnQjtTQUNuRCxZQUVDLFlBQVk7WUFDWixZQUFZO1lBQ1osY0FBYztZQUNkLGFBQWE7WUFDYixrQkFBa0I7OzJGQU1ULFlBQVk7a0JBbkJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLGdCQUFnQjtxQkFDbkQ7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZSxFQUFFLGdCQUFnQjtxQkFDbEM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEVESVRPUiwgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ2JPZmZjYW52YXNNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2tlbGV0b24nO1xuaW1wb3J0IHsgVGFiTWVudU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibWVudSc7XG5pbXBvcnQgeyBFZGl0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFZGl0b3JDb21wb25lbnQsXG4gICAgRWRpdG9yRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRURJVE9SLCB1c2VWYWx1ZToge30gfSAvLyBUT0RPOiBOZWVkZWQ/XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIFNrZWxldG9uTW9kdWxlLFxuICAgIFRhYk1lbnVNb2R1bGUsXG4gICAgTmdiT2ZmY2FudmFzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFZGl0b3JDb21wb25lbnQsIC8vIFRPRE86IE5lZWRlZD9cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUgeyB9XG4iXX0=