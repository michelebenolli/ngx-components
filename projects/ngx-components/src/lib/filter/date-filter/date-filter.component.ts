import { Component, EventEmitter, Input, Output } from '@angular/core';
// TODO import { format } from 'date-fns';
// TODO import * as moment from 'moment';
import { Filter } from '../../../models/filter';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent {

  @Input() filter!: Filter;
  @Output() changed = new EventEmitter();

  clear() { 
    this.filter.request.value = undefined;
    this.changed.emit();
  }

  onChange(event: any) {
    if (!event.value) return;
    // TODO: Try to use primeng datepicker and to avoid moment and date-fns
    // TODO this.filter.request.value = format(moment(event.value).toDate(), 'yyyy-MM-dd');
    this.changed.emit();
  }
}
