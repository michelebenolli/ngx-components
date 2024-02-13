import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule as CdkOverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    CdkOverlayModule
  ],
  exports: [
    OverlayComponent
  ]
})
export class OverlayModule { }
