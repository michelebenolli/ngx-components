import { Component, Inject, OnInit } from '@angular/core';
import { EDITOR, EditorComponent } from 'ngx-components';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {

  constructor(@Inject(EDITOR) public editor: EditorComponent) { }

  ngOnInit(): void {
    this.editor.saved.subscribe(() => this.save());
  }

  save(){
    console.log('saved!');
    this.editor.close();
  }
}
