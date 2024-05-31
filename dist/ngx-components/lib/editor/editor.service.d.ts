import { Type } from '@angular/core';
import { EditorConfig } from '../../models/editor-config';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EditorService {
    ngbOffcanvas: NgbOffcanvas;
    offcanvas: NgbOffcanvasRef;
    constructor(ngbOffcanvas: NgbOffcanvas);
    open(component: Type<any>, config: EditorConfig): void;
    onClosed(): Observable<any>;
    get closed(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditorService>;
}
