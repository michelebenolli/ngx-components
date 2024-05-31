import { EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SortOption } from '../../../models/sort-option';
import { OverlayComponent } from '../../overlay/overlay/overlay.component';
import * as i0 from "@angular/core";
export declare class SortPanelComponent {
    values: SortOption[];
    title?: string;
    multiple?: boolean;
    changed: EventEmitter<SortOption[]>;
    overlay: OverlayComponent;
    items: SortOption[];
    selected: string[];
    initialize(): void;
    apply(): void;
    drop(event: CdkDragDrop<SortOption[]>): void;
    toggleDirection(sortItem: SortOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortPanelComponent, "app-sort-panel", never, { "values": { "alias": "values"; "required": false; }; "title": { "alias": "title"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
