import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from 'ngx-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// TODO: Find a better way to export and provide models at "ngx-components/models"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(OverlayComponent) overlay!: OverlayComponent;

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      email: ['email', [Validators.required, Validators.email ]],
      age: ['5', [Validators.required, Validators.min(18) ]]
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
