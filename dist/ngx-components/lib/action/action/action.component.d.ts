import { OnInit, TemplateRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Action } from '../../../models/action';
import * as i0 from "@angular/core";
export declare class ActionComponent implements OnInit {
    actions?: Action[];
    data?: any;
    template?: TemplateRef<any>;
    items?: MenuItem[];
    ngOnInit(): void;
    private getItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionComponent, "app-action", never, { "actions": { "alias": "actions"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, ["template"], never, false, never>;
}
