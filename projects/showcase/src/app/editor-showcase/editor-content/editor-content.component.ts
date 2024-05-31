import { Component, Inject, OnInit } from '@angular/core';
import { EDITOR, EditorComponent } from 'ngx-components';
import { User } from 'projects/showcase/src/models/user';
import { UserService } from 'projects/showcase/src/services/user-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from 'projects/showcase/src/models/role';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {

  form!: FormGroup;
  data?: User;
  role = Role;

  constructor(
    @Inject(EDITOR) public editor: EditorComponent,
    private fb: FormBuilder,
    private userService: UserService) { }
    // TODO Export service from lib private notification: NotificationService) { }

  // TODO: Use it to create a sample model
  // E.g: User (name, birthdate, role, gender, disabled)
  // To show multiple material components and save a create/update form.
  // Add a mockup service to add/update/delete users... or do it here 
  // TODO: USe observable in service to simulate network calls.. with timeouts etc

  ngOnInit(): void {
    this.editor.saved.subscribe(() => this.save());
    // TODO: Init daat...
    this.editor.loading = true;
    // 1. Get data if edit
    // 2. Init form
    this.initForm();
    this.editor.loading = false;
  }

  initForm() {
    this.form = this.fb.group({
      id: this.data?.id,
      name: [this.data?.name, Validators.required],
      birthdate: this.data?.birthdate,
      role: [this.data?.role, Validators.required],
      gender: this.data?.gender,
      disabled: [this.data?.gender, Validators.required],
    });
  }

  save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;

    if (this.data?.id) {
      this.userService.update(this.form.value);
      //this.notification.success('message.updated');
      this.editor.close();
    }
    else {
      this.userService.create(this.form.value);
      //this.notification.success('message.created');
      this.editor.close();
    }
  }
}
