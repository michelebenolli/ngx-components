import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash'; // TODO USe import { cloneDeep } from 'lodash/cloneDeep';
import { Filter } from '../../../models/filter';
import { FilterRequest } from '../../../models/filter-request';
import { OverlayComponent } from '../../overlay';
import { hasValue } from '../../../utils/utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {

  @Input() filters?: Filter[];
  @Output() onFilter = new EventEmitter<FilterRequest[]>(); // TODO: Rename
  @ViewChild(OverlayComponent) overlay?: OverlayComponent;
  hasFilters!: boolean;
  hasOverlayFilters!: boolean;

  ngOnInit() {
    const visible = this.filters?.filter(x => x.type != 'hidden');
    this.hasFilters = !!visible?.some(x => !x.overlay);
    this.hasOverlayFilters = !!visible?.some(x => x.overlay);
  }

  apply(filter?: Filter) {
    if (filter?.overlay) return;
    this.overlay?.hide();
    this.onFilter.emit(this.getRequests());
  }

  clear() {
    this.filters?.filter(x => x.type != 'hidden').forEach(x => x.request.value = undefined);
    this.filters = _.cloneDeep(this.filters);
    this.onFilter.emit(this.getRequests());
  }

  getRequests(): FilterRequest[] | undefined {
    return this.filters?.filter(x => hasValue(x.request)).map(x => x.request);
  }

  // TODO: Why ondestroy needed? 
  ngOnDestroy() {
    this.filters?.filter(x => x.type != 'hidden').forEach(x => x.request.value = undefined);
  }
}
