import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FilterModule } from '../filter'; // TODO: Or filter/module?
import { TableComponent } from './table/table.component';
import { TableModule as PrimengTableModule } from 'primeng/table';
import { ActionModule } from '../action/action.module';
import { ColumnTemplatesDirective } from './column-templates.directive';
import { ColumnDirective } from './column.directive';
import * as i0 from "@angular/core";
export class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: TableModule, declarations: [TableComponent], imports: [
            // TODO: Keep only needed!!!
            CommonModule,
            ButtonModule,
            FilterModule,
            ActionModule,
            PrimengTableModule,
            ColumnDirective,
            ColumnTemplatesDirective], exports: [TableComponent,
            ColumnDirective,
            ColumnTemplatesDirective] }); }
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
                        PrimengTableModule,
                        ColumnDirective,
                        ColumnTemplatesDirective
                    ],
                    exports: [
                        TableComponent,
                        ColumnDirective,
                        ColumnTemplatesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL2xpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUMsQ0FBQywwQkFBMEI7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLElBQUksa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFzQnJELE1BQU0sT0FBTyxXQUFXOzhHQUFYLFdBQVc7K0dBQVgsV0FBVyxpQkFsQnBCLGNBQWM7WUFHZCw0QkFBNEI7WUFDNUIsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2Ysd0JBQXdCLGFBR3hCLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysd0JBQXdCOytHQUdmLFdBQVc7WUFmcEIsNEJBQTRCO1lBQzVCLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0I7OzJGQVVULFdBQVc7a0JBcEJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCw0QkFBNEI7d0JBQzVCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZix3QkFBd0I7cUJBQ3pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBGaWx0ZXJNb2R1bGUgfSBmcm9tICcuLi9maWx0ZXInOyAvLyBUT0RPOiBPciBmaWx0ZXIvbW9kdWxlP1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSBhcyBQcmltZW5nVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYmxlJztcbmltcG9ydCB7IEFjdGlvbk1vZHVsZSB9IGZyb20gJy4uL2FjdGlvbi9hY3Rpb24ubW9kdWxlJztcbmltcG9ydCB7IENvbHVtblRlbXBsYXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1uLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW4uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIC8vIFRPRE86IEtlZXAgb25seSBuZWVkZWQhISFcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEZpbHRlck1vZHVsZSxcbiAgICBBY3Rpb25Nb2R1bGUsXG4gICAgUHJpbWVuZ1RhYmxlTW9kdWxlLFxuICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICBDb2x1bW5UZW1wbGF0ZXNEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIENvbHVtbkRpcmVjdGl2ZSxcbiAgICBDb2x1bW5UZW1wbGF0ZXNEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7IH1cbiJdfQ==