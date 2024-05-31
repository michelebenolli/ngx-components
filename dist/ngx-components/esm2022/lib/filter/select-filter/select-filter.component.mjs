import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "primeng/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/forms";
export class SelectFilterComponent {
    constructor(injector) {
        this.injector = injector;
        this.changed = new EventEmitter();
        this.options = [];
        this.control = new FormControl('');
    }
    ngOnInit() {
        const service = this.filter.select?.service;
        if (service)
            this.service = this.injector.get(service);
        else {
            const option = this.filter.select.options?.find(x => x.value === this.filter.request.value);
            this.control.setValue(option?.label ?? '');
        }
    }
    getOptions() {
        const value = this.control.value;
        if (this.service) {
            let request = { pageNumber: 1, pageSize: 10 };
            const filter = this.filter.select.request;
            if (filter?.field && value)
                request.filters = [{ ...filter, value }];
            this.service.search(request).subscribe(x => {
                this.options = x.data.map(x => ({ label: this.filter.select.label(x), value: x.id }));
            });
        }
        else
            this.options = this.filter.select.options?.filter(x => !value || x.label?.toLowerCase().includes(value.toLowerCase())) ?? [];
    }
    onInput() {
        setTimeout(() => this.getOptions(), 500);
    }
    clear() {
        this.options = [];
        this.filter.request.value = undefined;
        this.control.setValue('');
        this.changed.emit();
    }
    onChange(event) {
        const option = event.option.value;
        this.filter.request.value = option.value;
        this.control.setValue(option.label);
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SelectFilterComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: SelectFilterComponent, selector: "app-select-filter", inputs: { filter: "filter" }, outputs: { changed: "changed" }, ngImport: i0, template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input type=\"text\" matInput [matAutocomplete]=\"auto\" [formControl]=\"control\" (input)=\"onInput()\">\n\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onChange($event)\">\n    @for (option of options; track option) {\n      <mat-option [value]=\"option\">\n        {{ option.label }}\n      </mat-option>\n    }\n  </mat-autocomplete>\n\n  @if (filter.request.value) {\n    <p-button matSuffix (click)=\"clear();$event.stopPropagation()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n\n  @if (!filter.request.value) {\n    <p-button matSuffix (click)=\"getOptions()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-chevron-down\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>", styles: [""], dependencies: [{ kind: "component", type: i1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SelectFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select-filter', template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input type=\"text\" matInput [matAutocomplete]=\"auto\" [formControl]=\"control\" (input)=\"onInput()\">\n\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onChange($event)\">\n    @for (option of options; track option) {\n      <mat-option [value]=\"option\">\n        {{ option.label }}\n      </mat-option>\n    }\n  </mat-autocomplete>\n\n  @if (filter.request.value) {\n    <p-button matSuffix (click)=\"clear();$event.stopPropagation()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n\n  @if (!filter.request.value) {\n    <p-button matSuffix (click)=\"getOptions()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-chevron-down\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>" }]
        }], ctorParameters: () => [{ type: i0.Injector }], propDecorators: { filter: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL2ZpbHRlci9zZWxlY3QtZmlsdGVyL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL2xpYi9maWx0ZXIvc2VsZWN0LWZpbHRlci9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFZLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQU83QyxNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFMNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkMsWUFBTyxHQUFtQixFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFHLElBQUksV0FBVyxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBRUksQ0FBQztJQUUzQyxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQzVDLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQU0sT0FBTyxDQUFDLENBQUM7YUFDdkQsQ0FBQztZQUNKLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxPQUFPLEdBQWlCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDNUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksTUFBTSxFQUFFLEtBQUssSUFBSSxLQUFLO2dCQUFFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU8sQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOztZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMxRCxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQsT0FBTztRQUNMLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE1BQU0sTUFBTSxHQUFpQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzhHQWpEVSxxQkFBcUI7a0dBQXJCLHFCQUFxQix3SENabEMsNjZCQXVCaUI7OzJGRFhKLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7NkVBTXBCLE1BQU07c0JBQWQsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3BhZ2VkLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3JlcG9zaXRvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9maWx0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmlsdGVyLW9wdGlvbic7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2VsZWN0LWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZmlsdGVyITogRmlsdGVyO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHNlcnZpY2UhOiBSZXBvc2l0b3J5U2VydmljZTtcclxuICBvcHRpb25zOiBGaWx0ZXJPcHRpb25bXSA9IFtdO1xyXG4gIGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nPignJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5maWx0ZXIuc2VsZWN0Py5zZXJ2aWNlO1xyXG4gICAgaWYgKHNlcnZpY2UpIHRoaXMuc2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0PGFueT4oc2VydmljZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maWx0ZXIuc2VsZWN0IS5vcHRpb25zPy5maW5kKHggPT4geC52YWx1ZSA9PT0gdGhpcy5maWx0ZXIucmVxdWVzdC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShvcHRpb24/LmxhYmVsID8/ICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgbGV0IHJlcXVlc3Q6IFBhZ2VkUmVxdWVzdCA9IHsgcGFnZU51bWJlcjogMSwgcGFnZVNpemU6IDEwIH07XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZmlsdGVyLnNlbGVjdCEucmVxdWVzdDtcclxuICAgICAgaWYgKGZpbHRlcj8uZmllbGQgJiYgdmFsdWUpIHJlcXVlc3QuZmlsdGVycyA9IFt7IC4uLmZpbHRlciwgdmFsdWUgfV07XHJcbiAgICAgIHRoaXMuc2VydmljZS5zZWFyY2gocmVxdWVzdCkuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHguZGF0YS5tYXAoeCA9PiAoeyBsYWJlbDogdGhpcy5maWx0ZXIuc2VsZWN0IS5sYWJlbCEoeCksIHZhbHVlOiB4LmlkIH0pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHRoaXMub3B0aW9ucyA9IHRoaXMuZmlsdGVyLnNlbGVjdCEub3B0aW9ucz8uZmlsdGVyKHggPT5cclxuICAgICAgIXZhbHVlIHx8IHgubGFiZWw/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpID8/IFtdO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXRPcHRpb25zKCksIDUwMCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXIucmVxdWVzdC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3Qgb3B0aW9uOiBGaWx0ZXJPcHRpb24gPSBldmVudC5vcHRpb24udmFsdWU7XHJcbiAgICB0aGlzLmZpbHRlci5yZXF1ZXN0LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKG9wdGlvbi5sYWJlbCk7XHJcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCgpO1xyXG4gIH1cclxufSIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwXCIgc3Vic2NyaXB0U2l6aW5nPVwiZHluYW1pY1wiPlxuICBAaWYgKGZpbHRlci5sYWJlbCkge1xuICAgIDxtYXQtbGFiZWw+e3sgZmlsdGVyLmxhYmVsIH19PC9tYXQtbGFiZWw+XG4gIH1cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAoaW5wdXQpPVwib25JbnB1dCgpXCI+XG5cbiAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxuICAgIEBmb3IgKG9wdGlvbiBvZiBvcHRpb25zOyB0cmFjayBvcHRpb24pIHtcbiAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgfVxuICA8L21hdC1hdXRvY29tcGxldGU+XG5cbiAgQGlmIChmaWx0ZXIucmVxdWVzdC52YWx1ZSkge1xuICAgIDxwLWJ1dHRvbiBtYXRTdWZmaXggKGNsaWNrKT1cImNsZWFyKCk7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgIFt0ZXh0XT1cInRydWVcIiBbcm91bmRlZF09XCJ0cnVlXCIgaWNvbj1cImJpIGJpLXgtbGdcIiBzZXZlcml0eT1cInNlY29uZGFyeVwiIHN0eWxlQ2xhc3M9XCJtZS0xXCIgLz5cbiAgfVxuXG4gIEBpZiAoIWZpbHRlci5yZXF1ZXN0LnZhbHVlKSB7XG4gICAgPHAtYnV0dG9uIG1hdFN1ZmZpeCAoY2xpY2spPVwiZ2V0T3B0aW9ucygpXCJcbiAgICAgIFt0ZXh0XT1cInRydWVcIiBbcm91bmRlZF09XCJ0cnVlXCIgaWNvbj1cImJpIGJpLWNoZXZyb24tZG93blwiIHNldmVyaXR5PVwic2Vjb25kYXJ5XCIgc3R5bGVDbGFzcz1cIm1lLTFcIiAvPlxuICB9XG48L21hdC1mb3JtLWZpZWxkPiJdfQ==