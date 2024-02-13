import { Injectable, Type } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import { EditorConfig } from '../../models/editor-config';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditorService {

  public offcanvas!: NgbOffcanvasRef;

  constructor(public ngbOffcanvas: NgbOffcanvas) { }

  // Open the editor component
  open(component: Type<any>, config: EditorConfig) {
    this.offcanvas = this.ngbOffcanvas.open(EditorComponent, {
      panelClass: 'myoffcanvas-' + (config.size ?? 'small'), // Does it work with local scss and ngdeep? yes, change name
      position: 'end',
      backdrop: 'static'
    });

    this.offcanvas.componentInstance.config = config;
    this.offcanvas.componentInstance.component = component;
  }

  // TODO: Why a method? Use "closed" used as closed.subscribe(...)
  onClosed() {
    return this.offcanvas.closed;
  }

  // TODO: Is this working?
  get closed(): Observable<any> {
    return this.offcanvas.closed;
  }

  // TODO: Add "dismissed" event
}
