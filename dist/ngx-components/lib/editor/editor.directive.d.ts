import { ComponentRef, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EditorDirective implements OnInit, OnDestroy {
    private viewContainerRef;
    component: Type<any>;
    editor: any;
    componentRef: ComponentRef<any>;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditorDirective, "[appEditor]", never, { "component": { "alias": "component"; "required": false; }; "editor": { "alias": "editor"; "required": false; }; }, {}, never, never, false, never>;
}
