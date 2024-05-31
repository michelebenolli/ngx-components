import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../picker.service";
import * as i2 from "primeng/button";
export class PickerComponent {
    constructor(pickerService) {
        this.pickerService = pickerService;
        this.change = new EventEmitter();
        this.setValue = (x) => Array.isArray(x) ? x : x ? [x] : [];
        this.getValue = () => this.config.multiple ?
            this.items.map(x => x.id) : this.items[0]?.id;
    }
    ngOnChanges(changes) {
        if (changes['data']) {
            this.items = this.setValue(changes['data'].currentValue);
            this.update();
        }
    }
    openPicker() {
        this.pickerService.open(this.config, this.items);
        this.pickerService.selected().subscribe((result) => {
            this.items = result;
            this.update();
        });
    }
    remove(i) {
        this.items.splice(i, 1);
        this.update();
    }
    update() {
        const value = this.getValue();
        this.control?.patchValue(value);
        this.change.emit(value);
    }
    hasError(name) {
        const hasError = name ? this.control?.hasError(name) : this.control?.invalid;
        return !!hasError && !!this.control?.touched;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerComponent, deps: [{ token: i1.PickerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: PickerComponent, selector: "app-picker", inputs: { label: "label", config: "config", data: "data", control: "control", disabled: "disabled" }, outputs: { change: "change" }, usesOnChanges: true, ngImport: i0, template: "@if (items?.length) {\n  <div class=\"mb-2 field\" (click)=\"openPicker()\">\n    <ul class=\"list-group list-group-flush\">\n      @for (item of items; track item; let i = $index) {\n        <li class=\"list-group-item\">\n          @if (item) {\n            <div class=\"d-flex align-items-center\">\n              <div class=\"flex-grow-1 lh-sm\">\n                <p class=\"mb-0\">{{ config.name(item) }}</p>\n                @if (config.description) {\n                  <small class=\"text-muted\">{{ config.description(item) }}</small>\n                }\n              </div>\n              @if (!disabled) {\n                <p-button (click)=\"remove(i); $event.stopPropagation()\"\n                  [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"px-2 py-1\" />\n              }\n            </div>\n          }\n        </li>\n      }\n    </ul>\n    <label>{{ label }}</label>\n  </div>\n}\n\n@if (!disabled && !items?.length) {\n  <button pButton type=\"button\" class=\"p-button-outlined p-button-secondary w-100 border-dashed\"\n    [class.btn-error]=\"hasError()\" (click)=\"openPicker()\">\n    {{ config.editor.title }}\n  </button>\n}\n\n<!-- // TODO: Include or avoid use of mat-error -->\n<!--<mat-error class=\"mb-2\">-->\n@if (hasError('required')) {\n  {{ 'error.required' }}\n}\n<!--</mat-error>-->", styles: [".field{position:relative;border:1px solid rgb(158,158,158);border-radius:4px;cursor:pointer}label{color:#0009!important;font-size:11px!important;position:absolute;top:-8px;left:11px;padding:0 4px;background:#fff}.list-group{border-radius:4px}.list-group-item{border-bottom:1px solid #ebedef!important}.list-group-item:last-of-type{border-bottom:none!important}mat-error{padding:0 1rem;font-size:smaller}.btn-error{border-color:#e9545b!important;color:#e9545b!important}\n"], dependencies: [{ kind: "directive", type: i2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i2.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-picker', template: "@if (items?.length) {\n  <div class=\"mb-2 field\" (click)=\"openPicker()\">\n    <ul class=\"list-group list-group-flush\">\n      @for (item of items; track item; let i = $index) {\n        <li class=\"list-group-item\">\n          @if (item) {\n            <div class=\"d-flex align-items-center\">\n              <div class=\"flex-grow-1 lh-sm\">\n                <p class=\"mb-0\">{{ config.name(item) }}</p>\n                @if (config.description) {\n                  <small class=\"text-muted\">{{ config.description(item) }}</small>\n                }\n              </div>\n              @if (!disabled) {\n                <p-button (click)=\"remove(i); $event.stopPropagation()\"\n                  [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"px-2 py-1\" />\n              }\n            </div>\n          }\n        </li>\n      }\n    </ul>\n    <label>{{ label }}</label>\n  </div>\n}\n\n@if (!disabled && !items?.length) {\n  <button pButton type=\"button\" class=\"p-button-outlined p-button-secondary w-100 border-dashed\"\n    [class.btn-error]=\"hasError()\" (click)=\"openPicker()\">\n    {{ config.editor.title }}\n  </button>\n}\n\n<!-- // TODO: Include or avoid use of mat-error -->\n<!--<mat-error class=\"mb-2\">-->\n@if (hasError('required')) {\n  {{ 'error.required' }}\n}\n<!--</mat-error>-->", styles: [".field{position:relative;border:1px solid rgb(158,158,158);border-radius:4px;cursor:pointer}label{color:#0009!important;font-size:11px!important;position:absolute;top:-8px;left:11px;padding:0 4px;background:#fff}.list-group{border-radius:4px}.list-group-item{border-bottom:1px solid #ebedef!important}.list-group-item:last-of-type{border-bottom:none!important}mat-error{padding:0 1rem;font-size:smaller}.btn-error{border-color:#e9545b!important;color:#e9545b!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.PickerService }], propDecorators: { label: [{
                type: Input
            }], config: [{
                type: Input
            }], data: [{
                type: Input
            }], control: [{
                type: Input
            }], disabled: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvcGlja2VyL3BpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL2xpYi9waWNrZXIvcGlja2VyL3BpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7OztBQVdqRyxNQUFNLE9BQU8sZUFBZTtJQVUxQixZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUhyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWlDLENBQUM7UUFvQ3JFLGFBQVEsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUUvRCxhQUFRLEdBQUcsR0FBa0MsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBcENFLENBQUM7SUFFcEQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBYTtRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUM3RSxPQUFPLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQy9DLENBQUM7OEdBekNVLGVBQWU7a0dBQWYsZUFBZSw0TUNYNUIsMjFDQXNDbUI7OzJGRDNCTixlQUFlO2tCQUwzQixTQUFTOytCQUNFLFlBQVk7a0ZBTWIsS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzsgXHJcbmltcG9ydCB7IFBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9waWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9waWNrZXItY29uZmlnJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2VudGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWNrZXJDb21wb25lbnQ8VCBleHRlbmRzIEVudGl0eT4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZztcclxuICBASW5wdXQoKSBjb25maWchOiBQaWNrZXJDb25maWc8VD47XHJcbiAgQElucHV0KCkgZGF0YT86IFQgfCBUW107XHJcbiAgQElucHV0KCkgY29udHJvbD86IEZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBudW1iZXJbXSB8IHVuZGVmaW5lZD4oKTtcclxuICBpdGVtcyE6IFRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBpY2tlclNlcnZpY2U6IFBpY2tlclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlc1snZGF0YSddKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNldFZhbHVlKGNoYW5nZXNbJ2RhdGEnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlblBpY2tlcigpIHtcclxuICAgIHRoaXMucGlja2VyU2VydmljZS5vcGVuKHRoaXMuY29uZmlnLCB0aGlzLml0ZW1zKTtcclxuICAgIHRoaXMucGlja2VyU2VydmljZS5zZWxlY3RlZCgpLnN1YnNjcmliZSgocmVzdWx0OiBUW10pID0+IHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHJlc3VsdDtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5pdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICB0aGlzLmNvbnRyb2w/LnBhdGNoVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBoYXNFcnJvcihuYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBoYXNFcnJvciA9IG5hbWUgPyB0aGlzLmNvbnRyb2w/Lmhhc0Vycm9yKG5hbWUpIDogdGhpcy5jb250cm9sPy5pbnZhbGlkO1xyXG4gICAgcmV0dXJuICEhaGFzRXJyb3IgJiYgISF0aGlzLmNvbnRyb2w/LnRvdWNoZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSA9ICh4OiBUIHwgVFtdKSA9PiBBcnJheS5pc0FycmF5KHgpID8geCA6IHggPyBbeF0gOiBbXTtcclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVtYmVyW10gPT4gdGhpcy5jb25maWcubXVsdGlwbGUgP1xyXG4gICAgdGhpcy5pdGVtcy5tYXAoeCA9PiB4LmlkISkgOiB0aGlzLml0ZW1zWzBdPy5pZDtcclxufVxyXG4iLCJAaWYgKGl0ZW1zPy5sZW5ndGgpIHtcbiAgPGRpdiBjbGFzcz1cIm1iLTIgZmllbGRcIiAoY2xpY2spPVwib3BlblBpY2tlcigpXCI+XG4gICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICBAZm9yIChpdGVtIG9mIGl0ZW1zOyB0cmFjayBpdGVtOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICBAaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSBsaC1zbVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMFwiPnt7IGNvbmZpZy5uYW1lKGl0ZW0pIH19PC9wPlxuICAgICAgICAgICAgICAgIEBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3sgY29uZmlnLmRlc2NyaXB0aW9uKGl0ZW0pIH19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBAaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGkpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJ1ZVwiIFtyb3VuZGVkXT1cInRydWVcIiBpY29uPVwiYmkgYmkteC1sZ1wiIHNldmVyaXR5PVwic2Vjb25kYXJ5XCIgc3R5bGVDbGFzcz1cInB4LTIgcHktMVwiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9saT5cbiAgICAgIH1cbiAgICA8L3VsPlxuICAgIDxsYWJlbD57eyBsYWJlbCB9fTwvbGFiZWw+XG4gIDwvZGl2PlxufVxuXG5AaWYgKCFkaXNhYmxlZCAmJiAhaXRlbXM/Lmxlbmd0aCkge1xuICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicC1idXR0b24tb3V0bGluZWQgcC1idXR0b24tc2Vjb25kYXJ5IHctMTAwIGJvcmRlci1kYXNoZWRcIlxuICAgIFtjbGFzcy5idG4tZXJyb3JdPVwiaGFzRXJyb3IoKVwiIChjbGljayk9XCJvcGVuUGlja2VyKClcIj5cbiAgICB7eyBjb25maWcuZWRpdG9yLnRpdGxlIH19XG4gIDwvYnV0dG9uPlxufVxuXG48IS0tIC8vIFRPRE86IEluY2x1ZGUgb3IgYXZvaWQgdXNlIG9mIG1hdC1lcnJvciAtLT5cbjwhLS08bWF0LWVycm9yIGNsYXNzPVwibWItMlwiPi0tPlxuQGlmIChoYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICB7eyAnZXJyb3IucmVxdWlyZWQnIH19XG59XG48IS0tPC9tYXQtZXJyb3I+LS0+Il19