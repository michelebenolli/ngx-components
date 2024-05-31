import { EventEmitter, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { PickerConfig } from '../../../models/picker-config';
import { Entity } from '../../../models/entity';
import { EditorComponent } from '../../editor';
import * as i0 from "@angular/core";
export declare class PickerEditorComponent<T extends Entity> implements OnInit {
    editor: EditorComponent;
    config: PickerConfig<T>;
    items?: T[];
    params: any;
    selection: SelectionModel<T>;
    changed: EventEmitter<any>;
    totalItems?: number;
    pageSize?: number;
    constructor(editor: EditorComponent);
    ngOnInit(): void;
    toggle(item: T): void;
    save(): void;
    isChecked(item: T): boolean;
    onPageChange(event: PageEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PickerEditorComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PickerEditorComponent<any>, "app-picker-editor", never, { "totalItems": { "alias": "totalItems"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
