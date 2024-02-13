import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[table-column]'
})
export class TableColumnDirective {
    @Input('table-column') id!: string;
    constructor(public template: TemplateRef<any>) { }
}