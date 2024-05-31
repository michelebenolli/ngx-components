import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AfterContentChecked, ChangeDetectorRef, EventEmitter, InjectionToken, Type } from '@angular/core';
import { EditorConfig } from '../../../models/editor-config';
import * as i0 from "@angular/core";
export declare const EDITOR: InjectionToken<EditorComponent>;
export declare class EditorComponent implements AfterContentChecked {
    offcanvas: NgbActiveOffcanvas;
    private changeDetector;
    component: Type<any>;
    config: EditorConfig;
    saved: EventEmitter<any>;
    loading: boolean;
    constructor(offcanvas: NgbActiveOffcanvas, changeDetector: ChangeDetectorRef);
    save(): void;
    close(data?: any): void;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorComponent, "app-editor", never, { "component": { "alias": "component"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
