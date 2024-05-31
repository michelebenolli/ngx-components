import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OverlayComponent {
    dismissable: boolean;
    style?: {
        [name: string]: any;
    };
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    isOpen: boolean;
    target: any;
    toggle(target: any): void;
    show(target: any): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OverlayComponent, "app-overlay", never, { "dismissable": { "alias": "dismissable"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, { "onShow": "onShow"; "onHide": "onHide"; }, never, ["*"], false, never>;
}
