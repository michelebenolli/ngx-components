import { Component, OnInit } from '@angular/core';
import { PickerConfig } from 'dist/ngx-components/models/picker-config';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-picker-showcase',
  templateUrl: './picker-showcase.component.html',
  styleUrls: ['./picker-showcase.component.scss']
})
export class PickerShowcaseComponent implements OnInit {

  items?: User[];
  pickerConfig: PickerConfig<User> = { 
    name: x => x.firstName + ' ' + x.lastName,
    multiple: false,
    editor: { title: 'Seleziona un valore' }
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.search({ pageSize: 3 }).subscribe(x => this.items = x.data);
  }
}
