import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
//import { EditorComponent } from './editor/editor.component';
export class EditorDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.componentRef = this.viewContainerRef.createComponent(this.component);
        this.componentRef.instance.editor = this.editor;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.0", type: EditorDirective, selector: "[appEditor]", inputs: { component: "component", editor: "editor" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appEditor]',
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { component: [{
                type: Input
            }], editor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvZWRpdG9yL2VkaXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUE2QyxNQUFNLGVBQWUsQ0FBQzs7QUFDMUcsOERBQThEO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBTTFCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs4R0FmVSxlQUFlO2tHQUFmLGVBQWU7OzJGQUFmLGVBQWU7a0JBSDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCO3FGQUdVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yL2VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwRWRpdG9yXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudCE6IFR5cGU8YW55PjtcclxuICBASW5wdXQoKSBlZGl0b3IhOiBhbnk7IC8vIEVkaXRvckNvbXBvbmVudDtcclxuICBjb21wb25lbnRSZWYhOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZWRpdG9yID0gdGhpcy5lZGl0b3I7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19