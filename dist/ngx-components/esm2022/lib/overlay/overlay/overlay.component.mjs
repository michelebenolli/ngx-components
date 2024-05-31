import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
export class OverlayComponent {
    constructor() {
        this.dismissable = true;
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.isOpen = false;
    }
    toggle(target) {
        this.isOpen ? this.hide() : this.show(target);
    }
    show(target) {
        this.target = target;
        this.isOpen = true;
        this.onShow.emit();
    }
    hide() {
        this.isOpen = false;
        this.onHide.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: OverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: OverlayComponent, selector: "app-overlay", inputs: { dismissable: "dismissable", style: "style" }, outputs: { onShow: "onShow", onHide: "onHide" }, ngImport: i0, template: "<ng-template \r\n    cdkConnectedOverlay\r\n    [cdkConnectedOverlayOrigin]=\"target\"\r\n    [cdkConnectedOverlayOpen]=\"isOpen\" \r\n    [cdkConnectedOverlayHasBackdrop]=\"dismissable\"\r\n    cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" \r\n    (backdropClick)=\"hide()\">\r\n\r\n    <div class=\"overlay\" [ngStyle]=\"style\">\r\n        <ng-content></ng-content>\r\n    </div>  \r\n</ng-template>", styles: [".overlay{background:#fff;padding:1rem;border-radius:5px;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}\n"], dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: OverlayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-overlay', template: "<ng-template \r\n    cdkConnectedOverlay\r\n    [cdkConnectedOverlayOrigin]=\"target\"\r\n    [cdkConnectedOverlayOpen]=\"isOpen\" \r\n    [cdkConnectedOverlayHasBackdrop]=\"dismissable\"\r\n    cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" \r\n    (backdropClick)=\"hide()\">\r\n\r\n    <div class=\"overlay\" [ngStyle]=\"style\">\r\n        <ng-content></ng-content>\r\n    </div>  \r\n</ng-template>", styles: [".overlay{background:#fff;padding:1rem;border-radius:5px;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}\n"] }]
        }], propDecorators: { dismissable: [{
                type: Input
            }], style: [{
                type: Input
            }], onShow: [{
                type: Output
            }], onHide: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY29tcG9uZW50cy9zcmMvbGliL292ZXJsYXkvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jb21wb25lbnRzL3NyYy9saWIvb3ZlcmxheS9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU92RSxNQUFNLE9BQU8sZ0JBQWdCO0lBTDdCO1FBT1csZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsV0FBTSxHQUFHLEtBQUssQ0FBQztLQWlCaEI7SUFkQyxNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFXO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs4R0F0QlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsNEpDUDdCLDRhQVdjOzsyRkRKRCxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsYUFBYTs4QkFNZCxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vdmVybGF5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGRpc21pc3NhYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzdHlsZT86IHsgW25hbWU6IHN0cmluZ106IGFueSB9XHJcbiAgQE91dHB1dCgpIG9uU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25IaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG4gIHRhcmdldDogYW55O1xyXG5cclxuICB0b2dnbGUodGFyZ2V0OiBhbnkpIHtcclxuICAgIHRoaXMuaXNPcGVuID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3codGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIHNob3codGFyZ2V0OiBhbnkpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vblNob3cuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uSGlkZS5lbWl0KCk7XHJcbiAgfVxyXG59IiwiPG5nLXRlbXBsYXRlIFxyXG4gICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwidGFyZ2V0XCJcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5cIiBcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiZGlzbWlzc2FibGVcIlxyXG4gICAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiIFxyXG4gICAgKGJhY2tkcm9wQ2xpY2spPVwiaGlkZSgpXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PiAgXHJcbjwvbmctdGVtcGxhdGU+Il19