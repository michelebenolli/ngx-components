import { Injectable, Type } from '@angular/core';
import { PickerEditorComponent } from './picker-editor/picker-editor.component';
import { PickerConfig } from '../../models/picker-config';
import { EditorService } from '../editor/editor.service'; // TODO: Import ok?

@Injectable({ providedIn: 'root' }) // TODO: Needed?
export class PickerService {

  constructor(public editorService: EditorService) { }

  open(config: PickerConfig, data?: any, editor?: Type<any>) {
    const editorConfig = {...config.editor, data: { config: config, items: data } };
    this.editorService.open(editor ?? PickerEditorComponent, editorConfig);
  }

  selected() {
    return this.editorService.onClosed();
  }
}
