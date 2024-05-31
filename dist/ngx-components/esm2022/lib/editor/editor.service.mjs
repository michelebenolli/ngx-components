import { Injectable } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
export class EditorService {
    constructor(ngbOffcanvas) {
        this.ngbOffcanvas = ngbOffcanvas;
    }
    // Open the editor component
    open(component, config) {
        this.offcanvas = this.ngbOffcanvas.open(EditorComponent, {
            panelClass: 'myoffcanvas-' + (config.size ?? 'small'), // Does it work with local scss and ngdeep? yes, change name
            position: 'end',
            backdrop: 'static'
        });
        this.offcanvas.componentInstance.config = config;
        this.offcanvas.componentInstance.component = component;
    }
    // TODO: Why a method? Use "closed" used as closed.subscribe(...)
    onClosed() {
        return this.offcanvas.closed;
    }
    // TODO: Is this working?
    get closed() {
        return this.offcanvas.closed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, deps: [{ token: i1.NgbOffcanvas }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.NgbOffcanvas }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL2VkaXRvci9lZGl0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBTTVELE1BQU0sT0FBTyxhQUFhO0lBSXhCLFlBQW1CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUVsRCw0QkFBNEI7SUFDNUIsSUFBSSxDQUFDLFNBQW9CLEVBQUUsTUFBb0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkQsVUFBVSxFQUFFLGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsNERBQTREO1lBQ25ILFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCx5QkFBeUI7SUFDekIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDOzhHQTFCVSxhQUFhO2tIQUFiLGFBQWEsY0FEQSxNQUFNOzsyRkFDbkIsYUFBYTtrQkFEekIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yL2VkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvZWRpdG9yLWNvbmZpZyc7XHJcbmltcG9ydCB7IE5nYk9mZmNhbnZhcywgTmdiT2ZmY2FudmFzUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBvZmZjYW52YXMhOiBOZ2JPZmZjYW52YXNSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuZ2JPZmZjYW52YXM6IE5nYk9mZmNhbnZhcykgeyB9XHJcblxyXG4gIC8vIE9wZW4gdGhlIGVkaXRvciBjb21wb25lbnRcclxuICBvcGVuKGNvbXBvbmVudDogVHlwZTxhbnk+LCBjb25maWc6IEVkaXRvckNvbmZpZykge1xyXG4gICAgdGhpcy5vZmZjYW52YXMgPSB0aGlzLm5nYk9mZmNhbnZhcy5vcGVuKEVkaXRvckNvbXBvbmVudCwge1xyXG4gICAgICBwYW5lbENsYXNzOiAnbXlvZmZjYW52YXMtJyArIChjb25maWcuc2l6ZSA/PyAnc21hbGwnKSwgLy8gRG9lcyBpdCB3b3JrIHdpdGggbG9jYWwgc2NzcyBhbmQgbmdkZWVwPyB5ZXMsIGNoYW5nZSBuYW1lXHJcbiAgICAgIHBvc2l0aW9uOiAnZW5kJyxcclxuICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9mZmNhbnZhcy5jb21wb25lbnRJbnN0YW5jZS5jb25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLm9mZmNhbnZhcy5jb21wb25lbnRJbnN0YW5jZS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBXaHkgYSBtZXRob2Q/IFVzZSBcImNsb3NlZFwiIHVzZWQgYXMgY2xvc2VkLnN1YnNjcmliZSguLi4pXHJcbiAgb25DbG9zZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vZmZjYW52YXMuY2xvc2VkO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogSXMgdGhpcyB3b3JraW5nP1xyXG4gIGdldCBjbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9mZmNhbnZhcy5jbG9zZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBBZGQgXCJkaXNtaXNzZWRcIiBldmVudFxyXG59XHJcbiJdfQ==