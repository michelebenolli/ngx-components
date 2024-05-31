import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';
import { OverlayComponent } from '../../overlay/overlay/overlay.component'; // TODO: Ok?
import * as i0 from "@angular/core";
import * as i1 from "primeng/button";
import * as i2 from "../../overlay/overlay/overlay.component";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "@angular/cdk/drag-drop";
import * as i5 from "primeng/checkbox";
import * as i6 from "@angular/forms";
export class SortPanelComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.items = [];
        this.selected = [];
    }
    initialize() {
        this.items = _.cloneDeep(this.values);
        this.selected = this.items.filter(x => x.selected).map(x => x.name);
    }
    apply() {
        this.items.forEach(x => x.selected = this.selected.includes(x.name));
        this.changed.emit(this.items);
        this.overlay.hide();
    }
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
    toggleDirection(sortItem) {
        const item = this.items.find(x => x.name === sortItem.name);
        if (item)
            item.direction = item?.direction === 'desc' ? 'asc' : 'desc';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: SortPanelComponent, selector: "app-sort-panel", inputs: { values: "values", title: "title", multiple: "multiple" }, outputs: { changed: "changed" }, viewQueries: [{ propertyName: "overlay", first: true, predicate: OverlayComponent, descendants: true }], ngImport: i0, template: "<app-overlay [style]=\"{ 'min-width': '250px' }\" (onShow)=\"initialize()\">\n  <p class=\"font-semibold\">{{ title ?? 'Ordinamento' }}</p>\n\n  <ul class=\"list-group mb-2\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    @for (item of items; track item) {\n      <li cdkDrag [cdkDragData]=\"item\" cdkDragBoundary=\".list-group\"\n        class=\"list-group-item list-group-item-action border-0 rounded d-flex align-items-center justify-content-between px-0\">\n        <div>\n          <i class=\"bi bi-grip-vertical handle\" cdkDragHandle></i>\n          <p-checkbox [value]=\"item.name\" [(ngModel)]=\"selected\" [inputId]=\"item.name\" />\n          <label class=\"label\" [for]=\"item.name\">{{ item.name }}</label>\n        </div>\n        <p-button icon=\"bi bi-arrow-{{ item.direction === 'desc' ? 'up' : 'down' }}\"\n          styleClass=\"p-button-rounded p-button-text\" (click)=\"toggleDirection(item)\" />\n        </li>\n      }\n    </ul>\n\n    <div class=\"d-flex justify-content-end\">\n      <p-button [label]=\"'Annulla'\" styleClass=\"p-button-text me-2\" (click)=\"overlay.hide()\" />\n      <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n    </div>\n  </app-overlay>\n\n  @if (items) {\n    <p-button icon=\"bi bi-sort-down\" styleClass=\"p-button-primary\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n  }", styles: [".handle{padding:.5rem;cursor:move}.label{margin-left:.5rem;cursor:pointer}\n"], dependencies: [{ kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i2.OverlayComponent, selector: "app-overlay", inputs: ["dismissable", "style"], outputs: ["onShow", "onHide"] }, { kind: "directive", type: i3.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i4.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i4.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "component", type: i5.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange", "onFocus", "onBlur"] }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sort-panel', template: "<app-overlay [style]=\"{ 'min-width': '250px' }\" (onShow)=\"initialize()\">\n  <p class=\"font-semibold\">{{ title ?? 'Ordinamento' }}</p>\n\n  <ul class=\"list-group mb-2\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    @for (item of items; track item) {\n      <li cdkDrag [cdkDragData]=\"item\" cdkDragBoundary=\".list-group\"\n        class=\"list-group-item list-group-item-action border-0 rounded d-flex align-items-center justify-content-between px-0\">\n        <div>\n          <i class=\"bi bi-grip-vertical handle\" cdkDragHandle></i>\n          <p-checkbox [value]=\"item.name\" [(ngModel)]=\"selected\" [inputId]=\"item.name\" />\n          <label class=\"label\" [for]=\"item.name\">{{ item.name }}</label>\n        </div>\n        <p-button icon=\"bi bi-arrow-{{ item.direction === 'desc' ? 'up' : 'down' }}\"\n          styleClass=\"p-button-rounded p-button-text\" (click)=\"toggleDirection(item)\" />\n        </li>\n      }\n    </ul>\n\n    <div class=\"d-flex justify-content-end\">\n      <p-button [label]=\"'Annulla'\" styleClass=\"p-button-text me-2\" (click)=\"overlay.hide()\" />\n      <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n    </div>\n  </app-overlay>\n\n  @if (items) {\n    <p-button icon=\"bi bi-sort-down\" styleClass=\"p-button-primary\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n  }", styles: [".handle{padding:.5rem;cursor:move}.label{margin-left:.5rem;cursor:pointer}\n"] }]
        }], propDecorators: { values: [{
                type: Input
            }], title: [{
                type: Input
            }], multiple: [{
                type: Input
            }], changed: [{
                type: Output
            }], overlay: [{
                type: ViewChild,
                args: [OverlayComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL3NvcnQtcGFuZWwvc29ydC1wYW5lbC9zb3J0LXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvc29ydC1wYW5lbC9zb3J0LXBhbmVsL3NvcnQtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDLENBQUMsWUFBWTs7Ozs7Ozs7QUFPeEYsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQVVZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUVyRCxVQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWEsRUFBRSxDQUFDO0tBcUJ6QjtJQW5CQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWdDO1FBQ25DLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBb0I7UUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDOzhHQTVCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixvTUFNbEIsZ0JBQWdCLGdEQ2pCN0IscTVDQTJCRzs7MkZEaEJVLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBTWpCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNzQixPQUFPO3NCQUFuQyxTQUFTO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBTb3J0T3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3NvcnQtb3B0aW9uJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vb3ZlcmxheS9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50JzsgLy8gVE9ETzogT2s/XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zb3J0LXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc29ydC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc29ydC1wYW5lbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0UGFuZWxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZXMhOiBTb3J0T3B0aW9uW107XHJcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbXVsdGlwbGU/OiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0T3B0aW9uW10+KCk7XHJcbiAgQFZpZXdDaGlsZChPdmVybGF5Q29tcG9uZW50KSBvdmVybGF5ITogT3ZlcmxheUNvbXBvbmVudDtcclxuICBpdGVtczogU29ydE9wdGlvbltdID0gW107XHJcbiAgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gXy5jbG9uZURlZXAodGhpcy52YWx1ZXMpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5zZWxlY3RlZCkubWFwKHggPT4geC5uYW1lKTtcclxuICB9XHJcblxyXG4gIGFwcGx5KCkge1xyXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKHggPT4geC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoeC5uYW1lKSk7XHJcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLml0ZW1zKTtcclxuICAgIHRoaXMub3ZlcmxheS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxTb3J0T3B0aW9uW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5pdGVtcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURpcmVjdGlvbihzb3J0SXRlbTogU29ydE9wdGlvbikge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gc29ydEl0ZW0ubmFtZSk7XHJcbiAgICBpZiAoaXRlbSkgaXRlbS5kaXJlY3Rpb24gPSBpdGVtPy5kaXJlY3Rpb24gPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnO1xyXG4gIH1cclxufVxyXG4iLCI8YXBwLW92ZXJsYXkgW3N0eWxlXT1cInsgJ21pbi13aWR0aCc6ICcyNTBweCcgfVwiIChvblNob3cpPVwiaW5pdGlhbGl6ZSgpXCI+XG4gIDxwIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPnt7IHRpdGxlID8/ICdPcmRpbmFtZW50bycgfX08L3A+XG5cbiAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBtYi0yXCIgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICBAZm9yIChpdGVtIG9mIGl0ZW1zOyB0cmFjayBpdGVtKSB7XG4gICAgICA8bGkgY2RrRHJhZyBbY2RrRHJhZ0RhdGFdPVwiaXRlbVwiIGNka0RyYWdCb3VuZGFyeT1cIi5saXN0LWdyb3VwXCJcbiAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBib3JkZXItMCByb3VuZGVkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtMFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZ3JpcC12ZXJ0aWNhbCBoYW5kbGVcIiBjZGtEcmFnSGFuZGxlPjwvaT5cbiAgICAgICAgICA8cC1jaGVja2JveCBbdmFsdWVdPVwiaXRlbS5uYW1lXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIFtpbnB1dElkXT1cIml0ZW0ubmFtZVwiIC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBbZm9yXT1cIml0ZW0ubmFtZVwiPnt7IGl0ZW0ubmFtZSB9fTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cC1idXR0b24gaWNvbj1cImJpIGJpLWFycm93LXt7IGl0ZW0uZGlyZWN0aW9uID09PSAnZGVzYycgPyAndXAnIDogJ2Rvd24nIH19XCJcbiAgICAgICAgICBzdHlsZUNsYXNzPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi10ZXh0XCIgKGNsaWNrKT1cInRvZ2dsZURpcmVjdGlvbihpdGVtKVwiIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG4gICAgPC91bD5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgPHAtYnV0dG9uIFtsYWJlbF09XCInQW5udWxsYSdcIiBzdHlsZUNsYXNzPVwicC1idXR0b24tdGV4dCBtZS0yXCIgKGNsaWNrKT1cIm92ZXJsYXkuaGlkZSgpXCIgLz5cbiAgICAgIDxwLWJ1dHRvbiBbbGFiZWxdPVwiJ0FwcGxpY2EnXCIgc3R5bGVDbGFzcz1cInAtYnV0dG9uLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHkoKVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvYXBwLW92ZXJsYXk+XG5cbiAgQGlmIChpdGVtcykge1xuICAgIDxwLWJ1dHRvbiBpY29uPVwiYmkgYmktc29ydC1kb3duXCIgc3R5bGVDbGFzcz1cInAtYnV0dG9uLXByaW1hcnlcIlxuICAgICAgY2RrT3ZlcmxheU9yaWdpbiAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiIChjbGljayk9XCJvdmVybGF5LnRvZ2dsZShvcmlnaW4pXCIgLz5cbiAgfSJdfQ==