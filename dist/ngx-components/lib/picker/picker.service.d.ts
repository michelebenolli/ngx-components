import { Type } from '@angular/core';
import { PickerConfig } from '../../models/picker-config';
import { EditorService } from '../editor/editor.service';
import * as i0 from "@angular/core";
export declare class PickerService {
    editorService: EditorService;
    constructor(editorService: EditorService);
    open(config: PickerConfig, data?: any, editor?: Type<any>): void;
    selected(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PickerService>;
}
