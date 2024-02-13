import { ComponentRef, Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
//import { EditorComponent } from './editor/editor.component';

@Directive({
  selector: '[appEditor]',
})
export class EditorDirective implements OnInit, OnDestroy {

  @Input() component!: Type<any>;
  @Input() editor!: any; // EditorComponent;
  componentRef!: ComponentRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.componentRef = this.viewContainerRef.createComponent(this.component);
    this.componentRef.instance.editor = this.editor;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
