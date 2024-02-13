import { Component } from '@angular/core';
import { Filter } from 'dist/ngx-components/models/filter';
import { FilterRequest } from 'dist/ngx-components/models/filter-request';

@Component({
  selector: 'app-filter-showcase',
  templateUrl: './filter-showcase.component.html',
  styleUrls: ['./filter-showcase.component.scss']
})
export class FilterShowcaseComponent {

  filters: Filter[] = [
    {
      type: 'text',
      label: 'Cerca per nome',
      request: { field: 'value', operator: 'contains' }
    },
    {
      type: 'select',
      label: 'Animale preferito',
      select: {
        options: [
          { label: 'Cane', value: 'dog' },
          { label: 'Gatto', value: 'cat' }
        ]
      },
      request: { field: 'animal', operator: 'eq' }
    },
    {
      type: 'date',
      label: 'Data',
      request: { field: 'date', operator: 'eq' }
    },
    {
      type: 'hidden',
      request: { field: 'hidden', operator: 'eq', value: 'test' }
    }
  ];

  filter(requests: FilterRequest[]) {
    console.log(requests);
  }
}
