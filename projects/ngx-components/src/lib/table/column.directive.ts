import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[g-column]',
    standalone: true
})
export class ColumnDirective {
    @Input('g-column') id!: string;
    constructor(public template: TemplateRef<any>) { }
}