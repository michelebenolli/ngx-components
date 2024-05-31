import { Injectable } from '@angular/core';
import { PickerEditorComponent } from './picker-editor/picker-editor.component';
import * as i0 from "@angular/core";
import * as i1 from "../editor/editor.service";
export class PickerService {
    constructor(editorService) {
        this.editorService = editorService;
    }
    open(config, data, editor) {
        const editorConfig = { ...config.editor, data: { config: config, items: data } };
        this.editorService.open(editor ?? PickerEditorComponent, editorConfig);
    }
    selected() {
        return this.editorService.onClosed();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, deps: [{ token: i1.EditorService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.EditorService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL3BpY2tlci9waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFLaEYsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRXBELElBQUksQ0FBQyxNQUFvQixFQUFFLElBQVUsRUFBRSxNQUFrQjtRQUN2RCxNQUFNLFlBQVksR0FBRyxFQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzhHQVhVLGFBQWE7a0hBQWIsYUFBYSxjQURBLE1BQU07OzJGQUNuQixhQUFhO2tCQUR6QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlja2VyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXItZWRpdG9yL3BpY2tlci1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BpY2tlci1jb25maWcnO1xyXG5pbXBvcnQgeyBFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vZWRpdG9yL2VkaXRvci5zZXJ2aWNlJzsgLy8gVE9ETzogSW1wb3J0IG9rP1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSkgLy8gVE9ETzogTmVlZGVkP1xyXG5leHBvcnQgY2xhc3MgUGlja2VyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3JTZXJ2aWNlOiBFZGl0b3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgb3Blbihjb25maWc6IFBpY2tlckNvbmZpZywgZGF0YT86IGFueSwgZWRpdG9yPzogVHlwZTxhbnk+KSB7XHJcbiAgICBjb25zdCBlZGl0b3JDb25maWcgPSB7Li4uY29uZmlnLmVkaXRvciwgZGF0YTogeyBjb25maWc6IGNvbmZpZywgaXRlbXM6IGRhdGEgfSB9O1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLm9wZW4oZWRpdG9yID8/IFBpY2tlckVkaXRvckNvbXBvbmVudCwgZWRpdG9yQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yU2VydmljZS5vbkNsb3NlZCgpO1xyXG4gIH1cclxufVxyXG4iXX0=