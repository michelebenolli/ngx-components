import { OnInit, TemplateRef } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Action } from '../../../models/action';
import { AuthService } from '../../../services/auth.service';
import * as i0 from "@angular/core";
export declare class ActionComponent implements OnInit {
    private confirmationService;
    private authService;
    actions?: Action[];
    data?: any;
    template?: TemplateRef<any>;
    items?: MenuItem[];
    key: string;
    constructor(confirmationService: ConfirmationService, authService: AuthService);
    ngOnInit(): void;
    openAction(item: MenuItem): void;
    confirm(item: MenuItem): void;
    private getItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionComponent, "g-action", never, { "actions": { "alias": "actions"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, {}, ["template"], never, false, never>;
}
