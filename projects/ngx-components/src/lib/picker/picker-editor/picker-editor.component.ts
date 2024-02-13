import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
//import { PagedList } from 'src/app/shared/models/paged-list';
import { SelectionModel } from '@angular/cdk/collections';
// import { PagedRequest } from 'src/app/shared/models/paged-request';
// import { getRequest } from '../../../other/utils';
import { PageEvent } from '@angular/material/paginator';
//import { FilterRequest } from 'src/app/shared/models/filter-request';
import { PickerConfig } from '../../../models/picker-config';
import { Entity } from '../../../models/entity';
import { EDITOR, EditorComponent } from '../../editor';

@Component({
  selector: 'app-picker-editor',
  templateUrl: './picker-editor.component.html',
  styleUrls: ['./picker-editor.component.scss']
})
export class PickerEditorComponent<T extends Entity> implements OnInit{

  config!: PickerConfig<T>;
  // TODO: Remove service?: any;
  items?: T[]; //PagedList<T>; // TODO: Avoid pagedlist, as in table
  params: any = { }; // PagedRequest; // TODO: USe it for paging?
  selection!: SelectionModel<T>;
  @Output() changed = new EventEmitter(); // TODO: USe it to update data from outside

  @Input() totalItems?: number;
  @Input() pageSize?: number = 10;

  constructor(
    @Inject(EDITOR) public editor: EditorComponent) { } //,
    // TODO REMOVE private injector: Injector) { }

  ngOnInit(): void {
    const data = this.editor.config.data;
    this.config = data.config;
    // this.service = this.injector.get<any>(data.config.service);
    this.editor.saved.subscribe(() => this.save());

    this.selection = new SelectionModel<T>(true, this.config.multiple ? data.items : []);
    this.selection.isSelected = this.isChecked.bind(this);
    // TODO this.params = getRequest(this.config?.filters);
    // TODO this.getData();
  }

  /*getData(): void {
    this.service.search(this.params).subscribe((result: PagedList<T>) => {
      this.items = result;
    });
  }*/

  toggle(item: T) {
    const selected = this.selection.selected.find(x => x.id === item.id);
    if (selected) this.selection.deselect(selected);
    else this.selection.select(item);
    if (!this.config.multiple) this.save();
  }

  save() {
    this.editor.close(this.selection.selected);
  }

  isChecked(item: T): boolean {
    return this.selection.selected.some(x => x.id === item.id);
  }

  onPageChange(event: PageEvent) {
    this.params.pageNumber = event.pageIndex + 1;
    // this.getData();
    this.changed.emit(this.params);
  }

  // TODO: Enable again
  /*filter(filters: FilterRequest[]) {
    this.params.filters = filters;
    this.params.pageNumber = 1;
    this.getData();
  }*/
}
