import { Component } from '@angular/core';
import { PickerConfig } from 'dist/ngx-components/models/picker-config';

export interface PickerData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-picker-showcase',
  templateUrl: './picker-showcase.component.html',
  styleUrls: ['./picker-showcase.component.scss']
})
export class PickerShowcaseComponent {

  pickerConfig: PickerConfig<PickerData> = {
    name: x => x.name,
    multiple: false,
    editor: { title: 'Seleziona un valore' }
  };

  pickerData: PickerData[] = [
    { id: 1, name: 'Primo' },
    { id: 2, name: 'Secondo' },
    { id: 3, name: 'Terzo' }
  ];
}
