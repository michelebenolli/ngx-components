import { Component } from '@angular/core';
import { EditorContentComponent } from './editor-content/editor-content.component';
import { EditorService } from 'ngx-components';

@Component({
  selector: 'app-editor-showcase',
  templateUrl: './editor-showcase.component.html',
  styleUrls: ['./editor-showcase.component.scss']
})
export class EditorShowcaseComponent {
  
  constructor(private editorService: EditorService){ }

  openEditor() {
    const config = { title: 'Titolo editor', subtitle: 'Sottotitolo editor' };
    this.editorService.open(EditorContentComponent, config);
    this.editorService.closed.subscribe(() => {
      console.log('editor closed!!!');
    });
  }
}
