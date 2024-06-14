import * as i0 from '@angular/core';
import { Injectable, Component, Input, ContentChild, NgModule, EventEmitter, Output, Directive, InjectionToken, Inject, ViewChild, ContentChildren } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as i4 from 'primeng/menu';
import { MenuModule } from 'primeng/menu';
import * as i5 from 'primeng/tooltip';
import * as i2$1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i7 from 'primeng/confirmdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import * as i2$2 from '@angular/cdk/overlay';
import { OverlayModule as OverlayModule$1 } from '@angular/cdk/overlay';
import * as i1$1 from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import * as i3 from 'primeng/skeleton';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { SelectionModel } from '@angular/cdk/collections';
import * as i1$2 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i2$3 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i2$4 from '@angular/material/form-field';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import * as _ from 'lodash';
import * as i3$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i4$1 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i5$1 from '@angular/material/core';
import { MAT_DATE_LOCALE, DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i4$2 from '@angular/cdk/drag-drop';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import * as i5$2 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i7$1 from 'primeng/table';
import { TableModule as TableModule$1 } from 'primeng/table';

class LocalStorageService {
    setItems(key, value) {
        this.setItem(key, value?.join(','));
    }
    setItem(key, value) {
        if (value)
            localStorage.setItem(key, value);
        else
            localStorage.removeItem(key);
    }
    getItems(key) {
        return localStorage.getItem(key)?.split(',');
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: LocalStorageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

const CLAIMS = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/';
class AuthService {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.token = new BehaviorSubject(this.getStorageToken);
        this.permissions = new BehaviorSubject(this.getStoragePermissions);
        this.user = new BehaviorSubject(this.getStorageUser);
    }
    login(token) {
        this.setStorageToken(token);
    }
    logout() {
        this.setStorageToken(null);
        //this.router.navigateByUrl('/login'); // TODO: Not here...
    }
    get isAuthenticated() {
        const token = localStorage.getItem('token');
        return token != null && !new JwtHelperService().isTokenExpired(token);
    }
    isAuthorized(permissions) {
        if (!Array.isArray(permissions))
            permissions = [permissions];
        if (permissions.length === 0)
            return true;
        permissions = permissions.map(x => x.toLowerCase());
        const userPermissions = this.getPermissions;
        return !!userPermissions && permissions.every(x => userPermissions.some(y => x === y));
    }
    get getToken() {
        return this.token.value;
    }
    get getPermissions() {
        return this.permissions.value;
    }
    get getUser() {
        return this.user.value;
    }
    hasPermission(permission) {
        return this.permissions.value.includes(permission);
    }
    setStorageToken(data) {
        // TODO: Data in the correct format for permissions from the backend... remove next line
        const permissions = data?.permissions.map(x => x.replace('Permissions.', '').toLowerCase()) ?? [];
        this.localStorage.setItem('token', data?.token);
        this.localStorage.setItem('refreshToken', data?.refreshToken);
        this.localStorage.setItems('permissions', permissions);
        this.token.next(data?.token ?? null);
        this.permissions.next(permissions);
        this.user.next(this.getStorageUser);
    }
    get getStorageToken() {
        return this.localStorage.getItem('token');
    }
    get getStoragePermissions() {
        return this.localStorage.getItems('permissions') ?? [];
    }
    // TODO: Simplify model without CLAIMS prefix?
    get getStorageUser() {
        const token = this.getToken;
        const user = token ? new JwtHelperService().decodeToken(token) : null;
        return !user ? undefined : {
            id: user[CLAIMS + 'nameidentifier'],
            firstName: user[CLAIMS + 'name'],
            lastName: user[CLAIMS + 'surname'],
            email: user[CLAIMS + 'emailaddress'],
            phone: user[CLAIMS + 'mobilephone'],
            tenant: user['tenant'],
            image: user['image_url']
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, deps: [{ token: LocalStorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: LocalStorageService }] });

class ActionComponent {
    constructor(confirmationService, authService) {
        this.confirmationService = confirmationService;
        this.authService = authService;
        this.key = Math.random().toString(36).substring(2, 10);
    }
    ngOnInit() {
        this.items = this.actions
            ?.filter(x => !x.permissions || this.authService.isAuthorized(x.permissions))
            .map(x => this.getItem(x));
    }
    openAction(item) {
        console.log('open action called');
        if (item.state?.['confirm'])
            this.confirm(item);
        else
            item.state?.['action']?.action?.(this.data);
    }
    confirm(item) {
        console.log('confirm called');
        this.confirmationService.confirm({
            key: this.key,
            header: 'Conferma',
            message: 'Confermi di voler effettuare l\'azione?',
            accept: () => {
                item.state?.['action']?.action?.(this.data);
                this.confirmationService.close();
            },
            reject: () => this.confirmationService.close()
        });
    }
    getItem(action) {
        return {
            label: action.name,
            icon: action.icon,
            items: action.items?.map(x => this.getItem(x)),
            visible: action.show?.(this.data) !== false,
            state: { action, confirm: action.confirm }, // TODO: Action in state needed?
            command: () => action.action?.(this.data) // TODO: Confirm does not work with sub-menu items!
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionComponent, deps: [{ token: i1.ConfirmationService }, { token: AuthService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: ActionComponent, selector: "g-action", inputs: { actions: "actions", data: "data" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], ngImport: i0, template: "@for (item of items; track item) {\n  @if (item.visible) {\n    <span (click)=\"item.items?.length ? menu.toggle($event) : openAction(item)\">\n      <ng-container *ngTemplateOutlet=\"template ?? icon; context: { $implicit: item }\" />\n      <p-menu #menu [model]=\"item.items\" [popup]=\"true\" appendTo=\"body\" />\n    </span>\n  }\n}\n\n<ng-template #icon let-item>\n  <p-button [pTooltip]=\"item.label\" [showDelay]=\"500\" tooltipPosition=\"top\"\n    [icon]=\"item.icon\" [text]=\"true\" [rounded]=\"true\" severity=\"secondary\" />\n</ng-template>\n\n<p-confirmDialog #dialog [key]=\"key\" [closable]=\"false\" [style]=\"{ 'min-width': '25vw'}\">\n  <ng-template pTemplate=\"message\" let-message>\n    {{ message.message }}\n  </ng-template>\n  <ng-template pTemplate=\"footer\" let-message>\n    {{ message | json }}\n    <p-button [label]=\"message?.rejectLabel ?? 'Annulla'\" [text]=\"true\" (click)=\"dialog.reject()\" />\n    <p-button [label]=\"message?.acceptLabel ?? 'Conferma'\" (click)=\"dialog.accept()\" />\n  </ng-template>\n</p-confirmDialog>", styles: [""], dependencies: [{ kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i4.Menu, selector: "p-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaLabel", "ariaLabelledBy", "id", "tabindex"], outputs: ["onShow", "onHide", "onBlur", "onFocus"] }, { kind: "directive", type: i5.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i7.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "closeAriaLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "pipe", type: i2.JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g-action', template: "@for (item of items; track item) {\n  @if (item.visible) {\n    <span (click)=\"item.items?.length ? menu.toggle($event) : openAction(item)\">\n      <ng-container *ngTemplateOutlet=\"template ?? icon; context: { $implicit: item }\" />\n      <p-menu #menu [model]=\"item.items\" [popup]=\"true\" appendTo=\"body\" />\n    </span>\n  }\n}\n\n<ng-template #icon let-item>\n  <p-button [pTooltip]=\"item.label\" [showDelay]=\"500\" tooltipPosition=\"top\"\n    [icon]=\"item.icon\" [text]=\"true\" [rounded]=\"true\" severity=\"secondary\" />\n</ng-template>\n\n<p-confirmDialog #dialog [key]=\"key\" [closable]=\"false\" [style]=\"{ 'min-width': '25vw'}\">\n  <ng-template pTemplate=\"message\" let-message>\n    {{ message.message }}\n  </ng-template>\n  <ng-template pTemplate=\"footer\" let-message>\n    {{ message | json }}\n    <p-button [label]=\"message?.rejectLabel ?? 'Annulla'\" [text]=\"true\" (click)=\"dialog.reject()\" />\n    <p-button [label]=\"message?.acceptLabel ?? 'Conferma'\" (click)=\"dialog.accept()\" />\n  </ng-template>\n</p-confirmDialog>" }]
        }], ctorParameters: () => [{ type: i1.ConfirmationService }, { type: AuthService }], propDecorators: { actions: [{
                type: Input
            }], data: [{
                type: Input
            }], template: [{
                type: ContentChild,
                args: ['template']
            }] } });

class ActionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, declarations: [ActionComponent], imports: [CommonModule,
            MenuModule,
            ButtonModule,
            ConfirmDialogModule], exports: [ActionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, providers: [
            ConfirmationService
        ], imports: [CommonModule,
            MenuModule,
            ButtonModule,
            ConfirmDialogModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ActionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ActionComponent
                    ],
                    imports: [
                        CommonModule,
                        MenuModule,
                        ButtonModule,
                        ConfirmDialogModule
                    ],
                    exports: [
                        ActionComponent
                    ],
                    providers: [
                        ConfirmationService
                    ]
                }]
        }] });

class OverlayComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: OverlayComponent, selector: "app-overlay", inputs: { dismissable: "dismissable", style: "style" }, outputs: { onShow: "onShow", onHide: "onHide" }, ngImport: i0, template: "<ng-template \r\n    cdkConnectedOverlay\r\n    [cdkConnectedOverlayOrigin]=\"target\"\r\n    [cdkConnectedOverlayOpen]=\"isOpen\" \r\n    [cdkConnectedOverlayHasBackdrop]=\"dismissable\"\r\n    cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" \r\n    (backdropClick)=\"hide()\">\r\n\r\n    <div class=\"overlay\" [ngStyle]=\"style\">\r\n        <ng-content></ng-content>\r\n    </div>  \r\n</ng-template>", styles: [".overlay{background:#fff;padding:1rem;border-radius:5px;box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}\n"], dependencies: [{ kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2$2.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }] }); }
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

class OverlayModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: OverlayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: OverlayModule, declarations: [OverlayComponent], imports: [CommonModule,
            OverlayModule$1], exports: [OverlayComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: OverlayModule, imports: [CommonModule,
            OverlayModule$1] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: OverlayModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OverlayComponent
                    ],
                    imports: [
                        CommonModule,
                        OverlayModule$1
                    ],
                    exports: [
                        OverlayComponent
                    ]
                }]
        }] });

//import { EditorComponent } from './editor/editor.component';
class EditorDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.componentRef = this.viewContainerRef.createComponent(this.component);
        this.componentRef.instance.editor = this.editor;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.0", type: EditorDirective, selector: "[appEditor]", inputs: { component: "component", editor: "editor" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appEditor]',
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { component: [{
                type: Input
            }], editor: [{
                type: Input
            }] } });

//import { MenuItem } from 'primeng/api';
//import { EditorTab } from '../../../models/editor-tab';
// Injection token that can be used to access the editor
const EDITOR = new InjectionToken('editor');
// TODO: Translate labels! (save, cancel...)
// TODO: Re-enable tabs!
class EditorComponent {
    //tabs?: MenuItem[];
    //activeTab?: MenuItem;
    constructor(offcanvas, changeDetector) {
        this.offcanvas = offcanvas;
        this.changeDetector = changeDetector;
        this.saved = new EventEmitter(); // TODO: Change name in "saved"?
        this.loading = false;
    }
    save() {
        this.saved.emit();
    }
    close(data) {
        this.offcanvas.close(data);
    }
    // TODO: Why needed?
    ngAfterContentChecked() {
        //this.changeDetector.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorComponent, deps: [{ token: i1$1.NgbActiveOffcanvas }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: EditorComponent, selector: "app-editor", inputs: { component: "component", config: "config" }, ngImport: i0, template: "<div class=\"offcanvas-header\">\n  <div class=\"d-flex justify-content-between align-items-center w-100\">\n    <div class=\"flex-grow-1 text-truncate\">\n      <h5 class=\"title\">{{ config.title }}</h5>\n      @if (config.subtitle) {\n        <p class=\"subtitle\">{{ config.subtitle }}</p>\n      }\n    </div>\n    <!-- // TODO: Enable tabs -->\n    <!--<p-tabMenu [model]=\"tabs\" [activeItem]=\"activeTab\" (activeItemChange)=\"activeTab = $event\">\n    <ng-template pTemplate=\"item\" let-item>\n      <div class=\"tab-item\">\n        <i class=\"tab-icon {{item.icon}}\"></i>\n        <span class=\"tab-text\">{{ item.label }}</span>\n      </div>\n    </ng-template>\n  </p-tabMenu>-->\n</div>\n</div>\n\n<div class=\"offcanvas-body bg-light\">\n  <div class=\"offcanvas-content\">\n    @if (loading) {\n      @for (a of [].constructor(5); track a) {\n        <p-skeleton styleClass=\"mb-4\" height=\"3rem\" />\n      }\n    }\n    <ng-template appEditor [component]=\"component\" [editor]=\"this\" />\n  </div>\n</div>\n\n<div class=\"offcanvas-footer\">\n  <div class=\"offcanvas-footer-content\">\n    <!-- // TODO: Remove inline style, allow to add custom actions! -->\n    <p-button [text]=\"true\" [style]=\"{'height': '36px', 'margin-right': '0.5rem'}\" (click)=\"offcanvas.dismiss()\">\n      {{ 'Annulla' }}\n    </p-button>\n    <p-button [style]=\"{'height': '36px'}\" (click)=\"save()\">\n      {{ 'Salva' }}\n    </p-button>\n  </div>\n</div>\n", styles: [".offcanvas-header{background:#fff;position:absolute;border-bottom:1px solid #ebedef;width:100%;box-sizing:border-box;height:70px;padding-right:0}.offcanvas-body{position:absolute;inset:70px 0 50px;overflow:auto}.offcanvas-content{padding:20px;background:#fff;border-radius:3px}.offcanvas-footer{position:absolute;width:100%;height:50px;padding:1rem;border-top:1px solid #ebedef;bottom:0;display:flex}.offcanvas-footer-content{display:flex;align-items:center;margin-left:auto}.title,.subtitle{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:0}:host::ng-deep .p-menuitem-link{padding:0!important;height:70px!important}::ng-deep .myoffcanvas-small{--bs-offcanvas-width: 500px;max-width:100%}::ng-deep .myoffcanvas-medium{--bs-offcanvas-width: 1000px;max-width:100%}::ng-deep .myoffcanvas-large{--bs-offcanvas-width: 1500px;max-width:100%}.tab-item{display:flex;flex-direction:column;align-items:center;padding:1rem .5rem .5rem;min-width:70px}.tab-icon{display:block;font-size:18px}.tab-text{font-size:12px}\n"], dependencies: [{ kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }, { kind: "directive", type: EditorDirective, selector: "[appEditor]", inputs: ["component", "editor"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-editor', template: "<div class=\"offcanvas-header\">\n  <div class=\"d-flex justify-content-between align-items-center w-100\">\n    <div class=\"flex-grow-1 text-truncate\">\n      <h5 class=\"title\">{{ config.title }}</h5>\n      @if (config.subtitle) {\n        <p class=\"subtitle\">{{ config.subtitle }}</p>\n      }\n    </div>\n    <!-- // TODO: Enable tabs -->\n    <!--<p-tabMenu [model]=\"tabs\" [activeItem]=\"activeTab\" (activeItemChange)=\"activeTab = $event\">\n    <ng-template pTemplate=\"item\" let-item>\n      <div class=\"tab-item\">\n        <i class=\"tab-icon {{item.icon}}\"></i>\n        <span class=\"tab-text\">{{ item.label }}</span>\n      </div>\n    </ng-template>\n  </p-tabMenu>-->\n</div>\n</div>\n\n<div class=\"offcanvas-body bg-light\">\n  <div class=\"offcanvas-content\">\n    @if (loading) {\n      @for (a of [].constructor(5); track a) {\n        <p-skeleton styleClass=\"mb-4\" height=\"3rem\" />\n      }\n    }\n    <ng-template appEditor [component]=\"component\" [editor]=\"this\" />\n  </div>\n</div>\n\n<div class=\"offcanvas-footer\">\n  <div class=\"offcanvas-footer-content\">\n    <!-- // TODO: Remove inline style, allow to add custom actions! -->\n    <p-button [text]=\"true\" [style]=\"{'height': '36px', 'margin-right': '0.5rem'}\" (click)=\"offcanvas.dismiss()\">\n      {{ 'Annulla' }}\n    </p-button>\n    <p-button [style]=\"{'height': '36px'}\" (click)=\"save()\">\n      {{ 'Salva' }}\n    </p-button>\n  </div>\n</div>\n", styles: [".offcanvas-header{background:#fff;position:absolute;border-bottom:1px solid #ebedef;width:100%;box-sizing:border-box;height:70px;padding-right:0}.offcanvas-body{position:absolute;inset:70px 0 50px;overflow:auto}.offcanvas-content{padding:20px;background:#fff;border-radius:3px}.offcanvas-footer{position:absolute;width:100%;height:50px;padding:1rem;border-top:1px solid #ebedef;bottom:0;display:flex}.offcanvas-footer-content{display:flex;align-items:center;margin-left:auto}.title,.subtitle{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:0}:host::ng-deep .p-menuitem-link{padding:0!important;height:70px!important}::ng-deep .myoffcanvas-small{--bs-offcanvas-width: 500px;max-width:100%}::ng-deep .myoffcanvas-medium{--bs-offcanvas-width: 1000px;max-width:100%}::ng-deep .myoffcanvas-large{--bs-offcanvas-width: 1500px;max-width:100%}.tab-item{display:flex;flex-direction:column;align-items:center;padding:1rem .5rem .5rem;min-width:70px}.tab-icon{display:block;font-size:18px}.tab-text{font-size:12px}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.NgbActiveOffcanvas }, { type: i0.ChangeDetectorRef }], propDecorators: { component: [{
                type: Input
            }], config: [{
                type: Input
            }] } });

class EditorModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, declarations: [EditorComponent,
            EditorDirective], imports: [CommonModule,
            ButtonModule,
            SkeletonModule,
            TabMenuModule,
            NgbOffcanvasModule], exports: [EditorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, providers: [
            { provide: EDITOR, useValue: {} } // TODO: Needed?
        ], imports: [CommonModule,
            ButtonModule,
            SkeletonModule,
            TabMenuModule,
            NgbOffcanvasModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EditorComponent,
                        EditorDirective
                    ],
                    providers: [
                        { provide: EDITOR, useValue: {} } // TODO: Needed?
                    ],
                    imports: [
                        CommonModule,
                        ButtonModule,
                        SkeletonModule,
                        TabMenuModule,
                        NgbOffcanvasModule
                    ],
                    exports: [
                        EditorComponent, // TODO: Needed?
                    ]
                }]
        }] });

class EditorService {
    constructor(ngbOffcanvas) {
        this.ngbOffcanvas = ngbOffcanvas;
    }
    // Open the editor component
    open(component, config) {
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
    get closed() {
        return this.offcanvas.closed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, deps: [{ token: i1$1.NgbOffcanvas }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: EditorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1$1.NgbOffcanvas }] });

// TODO: Export also directive and service?

class PickerEditorComponent {
    constructor(editor) {
        this.editor = editor;
        this.params = {}; // PagedRequest; // TODO: USe it for paging?
        this.changed = new EventEmitter(); // TODO: USe it to update data from outside
        this.pageSize = 10;
    } //,
    // TODO REMOVE private injector: Injector) { }
    ngOnInit() {
        const data = this.editor.config.data;
        this.config = data.config;
        // this.service = this.injector.get<any>(data.config.service);
        this.editor.saved.subscribe(() => this.save());
        this.selection = new SelectionModel(true, this.config.multiple ? data.items : []);
        this.selection.isSelected = this.isChecked.bind(this);
        // TODO this.params = getRequest(this.config?.filters);
        // TODO this.getData();
    }
    /*getData(): void {
      this.service.search(this.params).subscribe((result: PagedList<T>) => {
        this.items = result;
      });
    }*/
    toggle(item) {
        const selected = this.selection.selected.find(x => x.id === item.id);
        if (selected)
            this.selection.deselect(selected);
        else
            this.selection.select(item);
        if (!this.config.multiple)
            this.save();
    }
    save() {
        this.editor.close(this.selection.selected);
    }
    isChecked(item) {
        return this.selection.selected.some(x => x.id === item.id);
    }
    onPageChange(event) {
        this.params.pageNumber = event.pageIndex + 1;
        // this.getData();
        this.changed.emit(this.params);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerEditorComponent, deps: [{ token: EDITOR }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: PickerEditorComponent, selector: "app-picker-editor", inputs: { totalItems: "totalItems", pageSize: "pageSize" }, outputs: { changed: "changed" }, ngImport: i0, template: "<!-- Filters -->\n<!-- // TODO: Add filters... -->\n<!--<app-filters *ngIf=\"config.filters\" [filters]=\"config.filters\" (onFilter)=\"filter($event)\" />-->\n\n<!-- Selection list -->\n@if (items?.length) {\n  <mat-selection-list #picker class=\"mt-2\"\n    [multiple]=\"config.multiple\" [hideSingleSelectionIndicator]=\"true\">\n    <!-- // TODO: Check if the congig.id(item) condition below is correct -->\n    @for (item of items; track item) {\n      <mat-list-option class=\"list-item\" [value]=\"item.id\"\n        [selected]=\"selection.isSelected(item)\" (click)=\"toggle(item)\">\n        <span matListItemTitle>{{ config.name(item) }}</span>\n        @if (config.description) {\n          <span matListItemLine>{{ config.description(item) }}</span>\n        }\n      </mat-list-option>\n    }\n  </mat-selection-list>\n} @else {\n  <div class=\"border rounded p-3 mt-3\">\n    {{ 'Nessun elemento da visualizzare' }} <!-- // TODO: Translate in whole library -->\n  </div>\n}\n\n\n<!-- Pagination -->\n<!-- // TODO: Chnage pagination -->\n@if (items && totalItems && pageSize && totalItems > pageSize) {\n  <mat-paginator [length]=\"totalItems\"\n    [pageSize]=\"pageSize\" [hidePageSize]=\"true\" (page)=\"onPageChange($event)\" showFirstLastButtons />\n}", styles: [".list-item{border-bottom:1px solid #ebedef}\n"], dependencies: [{ kind: "component", type: i1$2.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1$2.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }, { kind: "directive", type: i1$2.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1$2.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "component", type: i2$3.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-picker-editor', template: "<!-- Filters -->\n<!-- // TODO: Add filters... -->\n<!--<app-filters *ngIf=\"config.filters\" [filters]=\"config.filters\" (onFilter)=\"filter($event)\" />-->\n\n<!-- Selection list -->\n@if (items?.length) {\n  <mat-selection-list #picker class=\"mt-2\"\n    [multiple]=\"config.multiple\" [hideSingleSelectionIndicator]=\"true\">\n    <!-- // TODO: Check if the congig.id(item) condition below is correct -->\n    @for (item of items; track item) {\n      <mat-list-option class=\"list-item\" [value]=\"item.id\"\n        [selected]=\"selection.isSelected(item)\" (click)=\"toggle(item)\">\n        <span matListItemTitle>{{ config.name(item) }}</span>\n        @if (config.description) {\n          <span matListItemLine>{{ config.description(item) }}</span>\n        }\n      </mat-list-option>\n    }\n  </mat-selection-list>\n} @else {\n  <div class=\"border rounded p-3 mt-3\">\n    {{ 'Nessun elemento da visualizzare' }} <!-- // TODO: Translate in whole library -->\n  </div>\n}\n\n\n<!-- Pagination -->\n<!-- // TODO: Chnage pagination -->\n@if (items && totalItems && pageSize && totalItems > pageSize) {\n  <mat-paginator [length]=\"totalItems\"\n    [pageSize]=\"pageSize\" [hidePageSize]=\"true\" (page)=\"onPageChange($event)\" showFirstLastButtons />\n}", styles: [".list-item{border-bottom:1px solid #ebedef}\n"] }]
        }], ctorParameters: () => [{ type: EditorComponent, decorators: [{
                    type: Inject,
                    args: [EDITOR]
                }] }], propDecorators: { changed: [{
                type: Output
            }], totalItems: [{
                type: Input
            }], pageSize: [{
                type: Input
            }] } });

class PickerService {
    constructor(editorService) {
        this.editorService = editorService;
    }
    open(config, data, editor) {
        const editorConfig = { ...config.editor, data: { config: config, items: data } };
        this.editorService.open(editor ?? PickerEditorComponent, editorConfig);
    }
    selected() {
        return this.editorService.onClosed();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, deps: [{ token: EditorService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: EditorService }] });

class PickerComponent {
    constructor(pickerService) {
        this.pickerService = pickerService;
        this.change = new EventEmitter();
        this.setValue = (x) => Array.isArray(x) ? x : x ? [x] : [];
        this.getValue = () => this.config.multiple ?
            this.items.map(x => x.id) : this.items[0]?.id;
    }
    ngOnChanges(changes) {
        if (changes['data']) {
            this.items = this.setValue(changes['data'].currentValue);
            this.update();
        }
    }
    openPicker() {
        this.pickerService.open(this.config, this.items);
        this.pickerService.selected().subscribe((result) => {
            this.items = result;
            this.update();
        });
    }
    remove(i) {
        this.items.splice(i, 1);
        this.update();
    }
    update() {
        const value = this.getValue();
        this.control?.patchValue(value);
        this.change.emit(value);
    }
    hasError(name) {
        const hasError = name ? this.control?.hasError(name) : this.control?.invalid;
        return !!hasError && !!this.control?.touched;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerComponent, deps: [{ token: PickerService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: PickerComponent, selector: "app-picker", inputs: { label: "label", config: "config", data: "data", control: "control", disabled: "disabled" }, outputs: { change: "change" }, usesOnChanges: true, ngImport: i0, template: "@if (items.length) {\n  <div class=\"mb-2 field\" (click)=\"openPicker()\">\n    <ul class=\"list-group list-group-flush\">\n      @for (item of items; track item; let i = $index) {\n        <li class=\"list-group-item\">\n          @if (item) {\n            <div class=\"d-flex align-items-center\">\n              <div class=\"flex-grow-1 lh-sm\">\n                <p class=\"mb-0\">{{ config.name(item) }}</p>\n                @if (config.description) {\n                  <small class=\"text-muted\">{{ config.description(item) }}</small>\n                }\n              </div>\n              @if (!disabled) {\n                <p-button (click)=\"remove(i); $event.stopPropagation()\"\n                  [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"px-2 py-1\" />\n              }\n            </div>\n          }\n        </li>\n      }\n    </ul>\n    <label>{{ label }}</label>\n  </div>\n}\n\n@if (!disabled && !items.length) {\n  <button pButton type=\"button\" class=\"p-button-outlined p-button-secondary w-100 border-dashed\"\n    [class.btn-error]=\"hasError()\" (click)=\"openPicker()\">\n    {{ config.editor.title }}\n  </button>\n}\n\n<!-- // TODO: Include or avoid use of mat-error -->\n<!--<mat-error class=\"mb-2\">-->\n@if (hasError('required')) {\n  {{ 'error.required' }}\n}\n<!--</mat-error>-->", styles: [".field{position:relative;border:1px solid rgb(158,158,158);border-radius:4px;cursor:pointer}label{color:#0009!important;font-size:11px!important;position:absolute;top:-8px;left:11px;padding:0 4px;background:#fff}.list-group{border-radius:4px}.list-group-item{border-bottom:1px solid #ebedef!important}.list-group-item:last-of-type{border-bottom:none!important}mat-error{padding:0 1rem;font-size:smaller}.btn-error{border-color:#e9545b!important;color:#e9545b!important}\n"], dependencies: [{ kind: "directive", type: i2$1.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-picker', template: "@if (items.length) {\n  <div class=\"mb-2 field\" (click)=\"openPicker()\">\n    <ul class=\"list-group list-group-flush\">\n      @for (item of items; track item; let i = $index) {\n        <li class=\"list-group-item\">\n          @if (item) {\n            <div class=\"d-flex align-items-center\">\n              <div class=\"flex-grow-1 lh-sm\">\n                <p class=\"mb-0\">{{ config.name(item) }}</p>\n                @if (config.description) {\n                  <small class=\"text-muted\">{{ config.description(item) }}</small>\n                }\n              </div>\n              @if (!disabled) {\n                <p-button (click)=\"remove(i); $event.stopPropagation()\"\n                  [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"px-2 py-1\" />\n              }\n            </div>\n          }\n        </li>\n      }\n    </ul>\n    <label>{{ label }}</label>\n  </div>\n}\n\n@if (!disabled && !items.length) {\n  <button pButton type=\"button\" class=\"p-button-outlined p-button-secondary w-100 border-dashed\"\n    [class.btn-error]=\"hasError()\" (click)=\"openPicker()\">\n    {{ config.editor.title }}\n  </button>\n}\n\n<!-- // TODO: Include or avoid use of mat-error -->\n<!--<mat-error class=\"mb-2\">-->\n@if (hasError('required')) {\n  {{ 'error.required' }}\n}\n<!--</mat-error>-->", styles: [".field{position:relative;border:1px solid rgb(158,158,158);border-radius:4px;cursor:pointer}label{color:#0009!important;font-size:11px!important;position:absolute;top:-8px;left:11px;padding:0 4px;background:#fff}.list-group{border-radius:4px}.list-group-item{border-bottom:1px solid #ebedef!important}.list-group-item:last-of-type{border-bottom:none!important}mat-error{padding:0 1rem;font-size:smaller}.btn-error{border-color:#e9545b!important;color:#e9545b!important}\n"] }]
        }], ctorParameters: () => [{ type: PickerService }], propDecorators: { label: [{
                type: Input
            }], config: [{
                type: Input
            }], data: [{
                type: Input
            }], control: [{
                type: Input
            }], disabled: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class PickerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, declarations: [PickerComponent,
            PickerEditorComponent], imports: [MatListModule,
            MatPaginatorModule, // TODO: Substitute with primeng
            // TODO: Keep only needed!!!
            // EditorModule, // TODO. needed?
            CommonModule,
            ButtonModule], exports: [PickerComponent,
            PickerEditorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, imports: [MatListModule,
            MatPaginatorModule, // TODO: Substitute with primeng
            // TODO: Keep only needed!!!
            // EditorModule, // TODO. needed?
            CommonModule,
            ButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: PickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PickerComponent,
                        PickerEditorComponent
                    ],
                    imports: [
                        MatListModule,
                        MatPaginatorModule, // TODO: Substitute with primeng
                        // TODO: Keep only needed!!!
                        // EditorModule, // TODO. needed?
                        CommonModule,
                        ButtonModule,
                        //SkeletonModule,
                        //TabMenuModule,
                        //NgbOffcanvasModule
                    ],
                    exports: [
                        PickerComponent,
                        PickerEditorComponent
                    ]
                }]
        }] });

function hasValue(request) {
    return request.value !== undefined || !!request.filters?.some(x => hasValue(x));
}
function getRequest(filters, pageSize) {
    return {
        pageNumber: 1,
        pageSize: pageSize ?? 10,
        filters: filters?.map(x => x.request).filter(x => hasValue(x))
    };
}

class TextFilterComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
    clear() {
        this.setValue(undefined);
        this.value = undefined;
    }
    onInput() {
        setTimeout(() => { this.setValue(this.value); }, 500);
    }
    setValue(value) {
        this.filter.request.filters?.forEach(x => x.value = value);
        this.filter.request.value = value;
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TextFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: TextFilterComponent, selector: "app-text-filter", inputs: { filter: "filter" }, outputs: { changed: "changed" }, ngImport: i0, template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input matInput type=\"text\" [(ngModel)]=\"value\" (ngModelChange)=\"onInput()\">\n  @if (filter.request?.value) {\n    <p-button matSuffix (click)=\"clear()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>", styles: [""], dependencies: [{ kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i2$4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i3$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TextFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text-filter', template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input matInput type=\"text\" [(ngModel)]=\"value\" (ngModelChange)=\"onInput()\">\n  @if (filter.request?.value) {\n    <p-button matSuffix (click)=\"clear()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>" }]
        }], propDecorators: { filter: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class DateFilterComponent {
    constructor() {
        this.changed = new EventEmitter();
    }
    clear() {
        this.filter.request.value = undefined;
        this.changed.emit();
    }
    onChange(event) {
        if (!event.value)
            return;
        // TODO: Try to use primeng datepicker and to avoid moment and date-fns
        // TODO this.filter.request.value = format(moment(event.value).toDate(), 'yyyy-MM-dd');
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: DateFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: DateFilterComponent, selector: "app-date-filter", inputs: { filter: "filter" }, outputs: { changed: "changed" }, ngImport: i0, template: "<!--<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\r\n    <mat-label>{{ filter.label }}</mat-label>\r\n    <input matInput [matDatepicker]=\"picker\" [value]=\"filter.request.value\" (dateChange)=\"onChange($event)\">\r\n    <p-button matSuffix *ngIf=\"filter.request?.value\" (click)=\"clear()\" icon=\"bi bi-x-lg\"\r\n        styleClass=\"p-button-rounded p-button-text p-button-secondary me-1\" />\r\n    <p-button matSuffix *ngIf=\"!filter.request?.value\" (click)=\"picker.open()\" icon=\"bi bi-calendar\"\r\n        styleClass=\"p-button-rounded p-button-text p-button-secondary me-1\" />\r\n    <mat-datepicker #picker />\r\n</mat-form-field>-->\r\n\r\n<!-- // TODO: Error in console.... remove it-->", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: DateFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date-filter', template: "<!--<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\r\n    <mat-label>{{ filter.label }}</mat-label>\r\n    <input matInput [matDatepicker]=\"picker\" [value]=\"filter.request.value\" (dateChange)=\"onChange($event)\">\r\n    <p-button matSuffix *ngIf=\"filter.request?.value\" (click)=\"clear()\" icon=\"bi bi-x-lg\"\r\n        styleClass=\"p-button-rounded p-button-text p-button-secondary me-1\" />\r\n    <p-button matSuffix *ngIf=\"!filter.request?.value\" (click)=\"picker.open()\" icon=\"bi bi-calendar\"\r\n        styleClass=\"p-button-rounded p-button-text p-button-secondary me-1\" />\r\n    <mat-datepicker #picker />\r\n</mat-form-field>-->\r\n\r\n<!-- // TODO: Error in console.... remove it-->" }]
        }], propDecorators: { filter: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class SelectFilterComponent {
    constructor(injector) {
        this.injector = injector;
        this.changed = new EventEmitter();
        this.options = [];
        this.control = new FormControl('');
    }
    ngOnInit() {
        const service = this.filter.select?.service;
        if (service)
            this.service = this.injector.get(service);
        else {
            const option = this.filter.select.options?.find(x => x.value === this.filter.request.value);
            this.control.setValue(option?.label ?? '');
        }
    }
    getOptions() {
        const value = this.control.value;
        if (this.service) {
            let request = { pageNumber: 1, pageSize: 10 };
            const filter = this.filter.select.request;
            if (filter?.field && value)
                request.filters = [{ ...filter, value }];
            this.service.search(request).subscribe(x => {
                this.options = x.data.map(x => ({ label: this.filter.select.label(x), value: x.id }));
            });
        }
        else
            this.options = this.filter.select.options?.filter(x => !value || x.label?.toLowerCase().includes(value.toLowerCase())) ?? [];
    }
    onInput() {
        setTimeout(() => this.getOptions(), 500);
    }
    clear() {
        this.options = [];
        this.filter.request.value = undefined;
        this.control.setValue('');
        this.changed.emit();
    }
    onChange(event) {
        const option = event.option.value;
        this.filter.request.value = option.value;
        this.control.setValue(option.label);
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SelectFilterComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: SelectFilterComponent, selector: "app-select-filter", inputs: { filter: "filter" }, outputs: { changed: "changed" }, ngImport: i0, template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input type=\"text\" matInput [matAutocomplete]=\"auto\" [formControl]=\"control\" (input)=\"onInput()\">\n\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onChange($event)\">\n    @for (option of options; track option) {\n      <mat-option [value]=\"option\">\n        {{ option.label }}\n      </mat-option>\n    }\n  </mat-autocomplete>\n\n  @if (filter.request.value) {\n    <p-button matSuffix (click)=\"clear();$event.stopPropagation()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n\n  @if (!filter.request.value) {\n    <p-button matSuffix (click)=\"getOptions()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-chevron-down\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>", styles: [""], dependencies: [{ kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i2$4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i3$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4$1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4$1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SelectFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-select-filter', template: "<mat-form-field class=\"w-100\" subscriptSizing=\"dynamic\">\n  @if (filter.label) {\n    <mat-label>{{ filter.label }}</mat-label>\n  }\n  <input type=\"text\" matInput [matAutocomplete]=\"auto\" [formControl]=\"control\" (input)=\"onInput()\">\n\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onChange($event)\">\n    @for (option of options; track option) {\n      <mat-option [value]=\"option\">\n        {{ option.label }}\n      </mat-option>\n    }\n  </mat-autocomplete>\n\n  @if (filter.request.value) {\n    <p-button matSuffix (click)=\"clear();$event.stopPropagation()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-x-lg\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n\n  @if (!filter.request.value) {\n    <p-button matSuffix (click)=\"getOptions()\"\n      [text]=\"true\" [rounded]=\"true\" icon=\"bi bi-chevron-down\" severity=\"secondary\" styleClass=\"me-1\" />\n  }\n</mat-form-field>" }]
        }], ctorParameters: () => [{ type: i0.Injector }], propDecorators: { filter: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });

class FilterComponent {
    constructor() {
        this.onFilter = new EventEmitter(); // TODO: Rename
    }
    ngOnInit() {
        const visible = this.filters?.filter(x => x.type != 'hidden');
        this.hasFilters = !!visible?.some(x => !x.overlay);
        this.hasOverlayFilters = !!visible?.some(x => x.overlay);
    }
    apply(filter) {
        if (filter?.overlay)
            return;
        this.overlay?.hide();
        this.onFilter.emit(this.getRequests());
    }
    clear() {
        this.filters?.filter(x => x.type != 'hidden').forEach(x => x.request.value = undefined);
        this.filters = _.cloneDeep(this.filters);
        this.onFilter.emit(this.getRequests());
    }
    getRequests() {
        return this.filters?.filter(x => hasValue(x.request)).map(x => x.request);
    }
    // TODO: Why ondestroy needed? 
    ngOnDestroy() {
        this.filters?.filter(x => x.type != 'hidden').forEach(x => x.request.value = undefined);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: FilterComponent, selector: "app-filter", inputs: { filters: "filters" }, outputs: { onFilter: "onFilter" }, viewQueries: [{ propertyName: "overlay", first: true, predicate: OverlayComponent, descendants: true }], ngImport: i0, template: "@if (hasFilters || hasOverlayFilters) {\n  <div class=\"d-flex align-items-center w-100\">\n    @if (hasFilters) {\n      <div class=\"filters\">\n        @for (filter of filters; track filter) {\n          @if (!filter.overlay) {\n            <ng-container *ngTemplateOutlet=\"filterTemplate; context:{filter}\" />\n          }\n        }\n      </div>\n    }\n    <!-- // TODO: Enable overlay -->\n    <!--<ng-container *ngIf=\"hasOverlayFilters\">\n    <app-overlay [style]=\"{ 'min-width': '350px' }\">\n      <p class=\"font-semibold\">{{ 'Filtri' | translate }}</p>\n      <div class=\"panel-filters\">\n        <ng-container *ngFor=\"let filter of filters\">\n          <ng-container *ngIf=\"filter.overlay\">\n            <ng-container *ngTemplateOutlet=\"filterTemplate; context:{filter}\" />\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"d-flex justify-content-end\">\n        <p-button [label]=\"'Cancella filtri'\" styleClass=\"p-button-text me-2\" (click)=\"clear()\" />\n        <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n      </div>\n    </app-overlay>\n    <p-button icon=\"bi bi-funnel\" styleClass=\"p-button-primary {{ hasFilters ? 'ms-3' : '' }}\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n    </ng-container>-->\n  </div>\n}\n\n<ng-template #filterTemplate let-filter=\"filter\">\n  @if (filter.type !== 'hidden') {\n    <div class=\"filter\">\n      @switch (filter.type) {\n        @case ('text') {\n          <app-text-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n        @case ('select') {\n          <app-select-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n        @case ('date') {\n          <app-date-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n      }\n    </div>\n  }\n</ng-template>", styles: [".filters{width:100%;display:flex}.filters .filter{width:100%;margin-right:1rem}.filters .filter:last-child{margin-right:0}.panel-filters .filter{margin-bottom:1rem}\n"], dependencies: [{ kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TextFilterComponent, selector: "app-text-filter", inputs: ["filter"], outputs: ["changed"] }, { kind: "component", type: DateFilterComponent, selector: "app-date-filter", inputs: ["filter"], outputs: ["changed"] }, { kind: "component", type: SelectFilterComponent, selector: "app-select-filter", inputs: ["filter"], outputs: ["changed"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-filter', template: "@if (hasFilters || hasOverlayFilters) {\n  <div class=\"d-flex align-items-center w-100\">\n    @if (hasFilters) {\n      <div class=\"filters\">\n        @for (filter of filters; track filter) {\n          @if (!filter.overlay) {\n            <ng-container *ngTemplateOutlet=\"filterTemplate; context:{filter}\" />\n          }\n        }\n      </div>\n    }\n    <!-- // TODO: Enable overlay -->\n    <!--<ng-container *ngIf=\"hasOverlayFilters\">\n    <app-overlay [style]=\"{ 'min-width': '350px' }\">\n      <p class=\"font-semibold\">{{ 'Filtri' | translate }}</p>\n      <div class=\"panel-filters\">\n        <ng-container *ngFor=\"let filter of filters\">\n          <ng-container *ngIf=\"filter.overlay\">\n            <ng-container *ngTemplateOutlet=\"filterTemplate; context:{filter}\" />\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"d-flex justify-content-end\">\n        <p-button [label]=\"'Cancella filtri'\" styleClass=\"p-button-text me-2\" (click)=\"clear()\" />\n        <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n      </div>\n    </app-overlay>\n    <p-button icon=\"bi bi-funnel\" styleClass=\"p-button-primary {{ hasFilters ? 'ms-3' : '' }}\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n    </ng-container>-->\n  </div>\n}\n\n<ng-template #filterTemplate let-filter=\"filter\">\n  @if (filter.type !== 'hidden') {\n    <div class=\"filter\">\n      @switch (filter.type) {\n        @case ('text') {\n          <app-text-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n        @case ('select') {\n          <app-select-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n        @case ('date') {\n          <app-date-filter [filter]=\"filter\" (changed)=\"apply(filter)\" />\n        }\n      }\n    </div>\n  }\n</ng-template>", styles: [".filters{width:100%;display:flex}.filters .filter{width:100%;margin-right:1rem}.filters .filter:last-child{margin-right:0}.panel-filters .filter{margin-bottom:1rem}\n"] }]
        }], propDecorators: { filters: [{
                type: Input
            }], onFilter: [{
                type: Output
            }], overlay: [{
                type: ViewChild,
                args: [OverlayComponent]
            }] } });

class FilterModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, declarations: [FilterComponent,
            TextFilterComponent,
            DateFilterComponent,
            SelectFilterComponent], imports: [CommonModule,
            ButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatTooltipModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            OverlayModule,
            // TODO: Date is in the right format?
            FormsModule,
            ReactiveFormsModule], exports: [FilterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, providers: [
            // TODO: The position of the adapter is this?
            // TODO: Remove from there and put in main application? (but console error if adapter not defined there)
            { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
            { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
            { provide: DateAdapter, useClass: MatNativeDateModule },
            { provide: MAT_DATE_FORMATS, useValue: {
                    parse: { dateInput: 'L' },
                    display: {
                        dateInput: 'DD/MM/YYYY',
                        monthYearLabel: 'MMM YYYY'
                    }
                }
            }
        ], imports: [CommonModule,
            ButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatTooltipModule,
            MatAutocompleteModule,
            MatDatepickerModule,
            OverlayModule,
            // TODO: Date is in the right format?
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: FilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FilterComponent,
                        TextFilterComponent,
                        DateFilterComponent,
                        SelectFilterComponent
                    ],
                    imports: [
                        CommonModule,
                        ButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatAutocompleteModule,
                        MatDatepickerModule,
                        OverlayModule,
                        // TODO: Date is in the right format?
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    providers: [
                        // TODO: The position of the adapter is this?
                        // TODO: Remove from there and put in main application? (but console error if adapter not defined there)
                        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
                        { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
                        { provide: DateAdapter, useClass: MatNativeDateModule },
                        { provide: MAT_DATE_FORMATS, useValue: {
                                parse: { dateInput: 'L' },
                                display: {
                                    dateInput: 'DD/MM/YYYY',
                                    monthYearLabel: 'MMM YYYY'
                                }
                            }
                        }
                    ],
                    exports: [
                        FilterComponent
                    ]
                }]
        }] });

class SortPanelComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.items = [];
        this.selected = [];
    }
    initialize() {
        this.items = _.cloneDeep(this.values);
        this.selected = this.items.filter(x => x.selected).map(x => x.name);
    }
    apply() {
        this.items.forEach(x => x.selected = this.selected.includes(x.name));
        this.changed.emit(this.items);
        this.overlay.hide();
    }
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
    toggleDirection(sortItem) {
        const item = this.items.find(x => x.name === sortItem.name);
        if (item)
            item.direction = item?.direction === 'desc' ? 'asc' : 'desc';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: SortPanelComponent, selector: "app-sort-panel", inputs: { values: "values", title: "title", multiple: "multiple" }, outputs: { changed: "changed" }, viewQueries: [{ propertyName: "overlay", first: true, predicate: OverlayComponent, descendants: true }], ngImport: i0, template: "<app-overlay [style]=\"{ 'min-width': '250px' }\" (onShow)=\"initialize()\">\n  <p class=\"font-semibold\">{{ title ?? 'Ordinamento' }}</p>\n\n  <ul class=\"list-group mb-2\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    @for (item of items; track item) {\n      <li cdkDrag [cdkDragData]=\"item\" cdkDragBoundary=\".list-group\"\n        class=\"list-group-item list-group-item-action border-0 rounded d-flex align-items-center justify-content-between px-0\">\n        <div>\n          <i class=\"bi bi-grip-vertical handle\" cdkDragHandle></i>\n          <p-checkbox [value]=\"item.name\" [(ngModel)]=\"selected\" [inputId]=\"item.name\" />\n          <label class=\"label\" [for]=\"item.name\">{{ item.name }}</label>\n        </div>\n        <p-button icon=\"bi bi-arrow-{{ item.direction === 'desc' ? 'up' : 'down' }}\"\n          styleClass=\"p-button-rounded p-button-text\" (click)=\"toggleDirection(item)\" />\n        </li>\n      }\n    </ul>\n\n    <div class=\"d-flex justify-content-end\">\n      <p-button [label]=\"'Annulla'\" styleClass=\"p-button-text me-2\" (click)=\"overlay.hide()\" />\n      <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n    </div>\n  </app-overlay>\n\n  @if (items) {\n    <p-button icon=\"bi bi-sort-down\" styleClass=\"p-button-primary\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n  }", styles: [".handle{padding:.5rem;cursor:move}.label{margin-left:.5rem;cursor:pointer}\n"], dependencies: [{ kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: OverlayComponent, selector: "app-overlay", inputs: ["dismissable", "style"], outputs: ["onShow", "onHide"] }, { kind: "directive", type: i2$2.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i4$2.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i4$2.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "component", type: i5$2.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange", "onFocus", "onBlur"] }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-sort-panel', template: "<app-overlay [style]=\"{ 'min-width': '250px' }\" (onShow)=\"initialize()\">\n  <p class=\"font-semibold\">{{ title ?? 'Ordinamento' }}</p>\n\n  <ul class=\"list-group mb-2\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    @for (item of items; track item) {\n      <li cdkDrag [cdkDragData]=\"item\" cdkDragBoundary=\".list-group\"\n        class=\"list-group-item list-group-item-action border-0 rounded d-flex align-items-center justify-content-between px-0\">\n        <div>\n          <i class=\"bi bi-grip-vertical handle\" cdkDragHandle></i>\n          <p-checkbox [value]=\"item.name\" [(ngModel)]=\"selected\" [inputId]=\"item.name\" />\n          <label class=\"label\" [for]=\"item.name\">{{ item.name }}</label>\n        </div>\n        <p-button icon=\"bi bi-arrow-{{ item.direction === 'desc' ? 'up' : 'down' }}\"\n          styleClass=\"p-button-rounded p-button-text\" (click)=\"toggleDirection(item)\" />\n        </li>\n      }\n    </ul>\n\n    <div class=\"d-flex justify-content-end\">\n      <p-button [label]=\"'Annulla'\" styleClass=\"p-button-text me-2\" (click)=\"overlay.hide()\" />\n      <p-button [label]=\"'Applica'\" styleClass=\"p-button-primary\" (click)=\"apply()\" />\n    </div>\n  </app-overlay>\n\n  @if (items) {\n    <p-button icon=\"bi bi-sort-down\" styleClass=\"p-button-primary\"\n      cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" (click)=\"overlay.toggle(origin)\" />\n  }", styles: [".handle{padding:.5rem;cursor:move}.label{margin-left:.5rem;cursor:pointer}\n"] }]
        }], propDecorators: { values: [{
                type: Input
            }], title: [{
                type: Input
            }], multiple: [{
                type: Input
            }], changed: [{
                type: Output
            }], overlay: [{
                type: ViewChild,
                args: [OverlayComponent]
            }] } });

class SortPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, declarations: [SortPanelComponent], imports: [CommonModule, // TODO: NEeded? (in all components), why?
            ButtonModule,
            OverlayModule,
            OverlayModule$1,
            CdkDrag,
            CdkDropList,
            CheckboxModule,
            FormsModule], exports: [SortPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, imports: [CommonModule, // TODO: NEeded? (in all components), why?
            ButtonModule,
            OverlayModule,
            OverlayModule$1,
            CheckboxModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: SortPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SortPanelComponent
                    ],
                    imports: [
                        CommonModule, // TODO: NEeded? (in all components), why?
                        ButtonModule,
                        OverlayModule,
                        OverlayModule$1,
                        CdkDrag,
                        CdkDropList,
                        CheckboxModule,
                        FormsModule
                    ],
                    exports: [
                        SortPanelComponent
                    ]
                }]
        }] });

class ColumnDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.0", type: ColumnDirective, isStandalone: true, selector: "[g-column]", inputs: { id: ["g-column", "id"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[g-column]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { id: [{
                type: Input,
                args: ['g-column']
            }] } });

// Service used by the column templates directive to store the default column templates
class ColumnTemplates {
    constructor() {
        this.directives = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplates, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplates, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplates, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/**
 * Directive allowing to register default templates for table columns.
 * It is supposed to be used once, typically in the root component. Example of usage:
 * <g-column-templates>
 *   <ng-template g-column="date" let-item let-column="column">{{ column.value(item) | date }}</ng-template>
 *   <ng-template g-column="age" let-item let-column="column">{{ column.value(item) | number }}</ng-template>
 * </g-column-templates>
 */
class ColumnTemplatesDirective {
    constructor(columnTemplates) {
        this.columnTemplates = columnTemplates;
    }
    ngAfterContentInit() {
        this.columnTemplates.directives = this.directives.toArray();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplatesDirective, deps: [{ token: ColumnTemplates }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.0", type: ColumnTemplatesDirective, isStandalone: true, selector: "g-column-templates", queries: [{ propertyName: "directives", predicate: ColumnDirective }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ColumnTemplatesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'g-column-templates',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: ColumnTemplates }], propDecorators: { directives: [{
                type: ContentChildren,
                args: [ColumnDirective]
            }] } });

class TableComponent {
    set data(value) { this.items = value; }
    constructor(tableTemplates) {
        this.tableTemplates = tableTemplates;
        this.params = {};
        this.pageSize = 10;
        this.changed = new EventEmitter();
        this.onColReordered = new EventEmitter();
    }
    ngOnInit() {
        this.params.filters = this.filters?.map(x => x.request)?.filter(x => hasValue(x));
    }
    clearSelection() {
        this.selected = [];
    }
    sort(event) {
        const direction = (event.order == 1) ? 'asc' : 'desc';
        this.params.orderBy = event.field?.split(' ')?.map(x => x + ' ' + direction);
        this.changed.emit(this.params);
    }
    pageChange(event) {
        this.params.pageNumber = event.first / event.rows + 1;
        this.params.pageSize = event.rows;
        this.changed.emit(this.params);
    }
    filter(requests) {
        this.params.pageNumber = 1;
        this.params.filters = requests.filter(x => hasValue(x));
        this.changed.emit(this.params);
    }
    // TODO: Called too many times... replace it with a array of templates
    // To populate when the component loads...
    getTemplate(name) {
        return this.templates?.find(x => x.id === name)?.template ??
            this.tableTemplates.directives.find(x => x.id === name)?.template ?? null;
    }
    onColReorder(event) {
        this.onColReordered.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableComponent, deps: [{ token: ColumnTemplates }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: TableComponent, selector: "g-table", inputs: { columns: "columns", params: "params", actions: "actions", tableActions: "tableActions", bulkActions: "bulkActions", filters: "filters", totalItems: "totalItems", pageSize: "pageSize", data: "data" }, outputs: { changed: "changed", onColReordered: "onColReordered" }, queries: [{ propertyName: "templates", predicate: ColumnDirective }], ngImport: i0, template: "<!-- Bulk actions -->\n<div *ngIf=\"bulkActions?.length && selected?.length\" class=\"d-flex justify-content-between p-3 mb-3 rounded bg-light\">\n  <p-button [label]=\"'Annulla selezione'\" (click)=\"clearSelection()\" styleClass=\"p-button-outlined p-button-secondary\" />\n  <g-action [data]=\"selected\" [actions]=\"bulkActions\" class=\"d-flex gap-2\">\n    <ng-template #template let-action>\n      <p-button [label]=\"action.label\" />\n    </ng-template>\n  </g-action>\n</div>\n\n<!-- Table filters and actions -->\n<div *ngIf=\"filters?.length || tableActions?.length\" class=\"d-flex gap-3 justify-content-between align-items-center pb-3 overflow-auto\">\n  <app-filter [filters]=\"filters\" (onFilter)=\"filter($event)\" class=\"flex-grow-1\" />\n  <g-action *ngIf=\"tableActions?.length\" [actions]=\"tableActions\" class=\"d-flex gap-2\">\n    <ng-template #template let-action>\n      <p-button [label]=\"action.label\" />\n    </ng-template>\n  </g-action>\n</div>\n\n<!-- Table -->\n<p-table [resizableColumns]=\"true\" [value]=\"items ?? []\" responsiveLayout=\"scroll\" (onSort)=\"sort($event)\"\n  [customSort]=\"true\" [lazy]=\"true\" [(selection)]=\"selected\" [columns]=\"columns\"\n  [reorderableColumns]=\"true\" (onColReorder)=\"onColReorder($event)\"\n  [paginator]=\"true\" [alwaysShowPaginator]=\"false\" [totalRecords]=\"totalItems ?? items?.length ?? 0\" [rows]=\"pageSize\"\n  [showCurrentPageReport]=\"true\" currentPageReportTemplate=\"{first} - {last} di {totalRecords}\"\n  [rowsPerPageOptions]=\"[5, 10, 25, 100]\" (onPage)=\"pageChange($event)\">\n  \n  <!-- Table header -->\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th style=\"width:0\" *ngIf=\"bulkActions?.length\">\n        <p-tableHeaderCheckbox />\n      </th>\n      <th *ngFor=\"let column of columns\" [pSortableColumn]=\"column.sort ?? ''\" pReorderableColumn>\n        {{column.name}} <p-sortIcon *ngIf=\"column.sort\" [field]=\"column.sort\" />\n      </th>\n      <th *ngIf=\"actions\" class=\"text-end\" style=\"width:0\"></th>\n    </tr>\n  </ng-template>\n\n  <!-- Table body -->\n  <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n    <tr [pSelectableRow]=\"item\" [pSelectableRowIndex]=\"rowIndex\">\n      <td *ngIf=\"bulkActions?.length\">\n        <p-tableCheckbox [value]=\"item\" />\n      </td>\n      <td *ngFor=\"let column of columns;\">\n        <ng-container [ngTemplateOutlet]=\"column.template ? getTemplate(column.template) : template\"\n          [ngTemplateOutletContext]=\"{ $implicit: item, column }\" />\n      </td>\n      <td class=\"text-end\" *ngIf=\"actions\">\n        <g-action [data]=\"item\" [actions]=\"actions\" />\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"emptymessage\">\n    <tr>\n      <td class=\"mat-cell text-center\" [attr.colspan]=\"100\">\n        {{ 'Nessun elemento da visualizzare' }} <!-- // TODO: Translate -->\n      </td>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"paginatorleft\"></ng-template>\n</p-table>\n\n<!-- Table data template -->\n<ng-template #template let-item let-column=\"column\">\n  {{ column.value(item) }}\n\n  <!--@switch (column.type) {\n    @case (DataType.Date) {\n        {{ column.value(item) | date: 'dd/MM/yyyy' }}\n    }\n    @case (DataType.DateTime) {\n        {{ column.value(item) | date: 'dd/MM/yyyy, hh:mm' }}\n    }\n    @case (DataType.Amount) {\n        {{ column.value(item) | currency: 'EUR': 'symbol' : undefined: 'it-IT' }}\n    }\n    @case (DataType.Bool) {\n        {{ column.value(item) ? 'Si': 'No' }}\n    }\n    @default {\n        {{ column.value(item) }}\n    }\n  }-->\n</ng-template>", styles: [":host::ng-deep .p-datatable .p-datatable-tbody>tr>td{padding:.5rem 1rem;height:3.5rem}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: FilterComponent, selector: "app-filter", inputs: ["filters"], outputs: ["onFilter"] }, { kind: "component", type: ActionComponent, selector: "g-action", inputs: ["actions", "data"] }, { kind: "component", type: i7$1.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }, { kind: "directive", type: i7$1.SortableColumn, selector: "[pSortableColumn]", inputs: ["pSortableColumn", "pSortableColumnDisabled"] }, { kind: "directive", type: i7$1.SelectableRow, selector: "[pSelectableRow]", inputs: ["pSelectableRow", "pSelectableRowIndex", "pSelectableRowDisabled"] }, { kind: "directive", type: i7$1.ReorderableColumn, selector: "[pReorderableColumn]", inputs: ["pReorderableColumnDisabled"] }, { kind: "component", type: i7$1.SortIcon, selector: "p-sortIcon", inputs: ["field"] }, { kind: "component", type: i7$1.TableCheckbox, selector: "p-tableCheckbox", inputs: ["disabled", "value", "index", "inputId", "name", "required", "ariaLabel"] }, { kind: "component", type: i7$1.TableHeaderCheckbox, selector: "p-tableHeaderCheckbox", inputs: ["disabled", "inputId", "name", "ariaLabel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g-table', template: "<!-- Bulk actions -->\n<div *ngIf=\"bulkActions?.length && selected?.length\" class=\"d-flex justify-content-between p-3 mb-3 rounded bg-light\">\n  <p-button [label]=\"'Annulla selezione'\" (click)=\"clearSelection()\" styleClass=\"p-button-outlined p-button-secondary\" />\n  <g-action [data]=\"selected\" [actions]=\"bulkActions\" class=\"d-flex gap-2\">\n    <ng-template #template let-action>\n      <p-button [label]=\"action.label\" />\n    </ng-template>\n  </g-action>\n</div>\n\n<!-- Table filters and actions -->\n<div *ngIf=\"filters?.length || tableActions?.length\" class=\"d-flex gap-3 justify-content-between align-items-center pb-3 overflow-auto\">\n  <app-filter [filters]=\"filters\" (onFilter)=\"filter($event)\" class=\"flex-grow-1\" />\n  <g-action *ngIf=\"tableActions?.length\" [actions]=\"tableActions\" class=\"d-flex gap-2\">\n    <ng-template #template let-action>\n      <p-button [label]=\"action.label\" />\n    </ng-template>\n  </g-action>\n</div>\n\n<!-- Table -->\n<p-table [resizableColumns]=\"true\" [value]=\"items ?? []\" responsiveLayout=\"scroll\" (onSort)=\"sort($event)\"\n  [customSort]=\"true\" [lazy]=\"true\" [(selection)]=\"selected\" [columns]=\"columns\"\n  [reorderableColumns]=\"true\" (onColReorder)=\"onColReorder($event)\"\n  [paginator]=\"true\" [alwaysShowPaginator]=\"false\" [totalRecords]=\"totalItems ?? items?.length ?? 0\" [rows]=\"pageSize\"\n  [showCurrentPageReport]=\"true\" currentPageReportTemplate=\"{first} - {last} di {totalRecords}\"\n  [rowsPerPageOptions]=\"[5, 10, 25, 100]\" (onPage)=\"pageChange($event)\">\n  \n  <!-- Table header -->\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th style=\"width:0\" *ngIf=\"bulkActions?.length\">\n        <p-tableHeaderCheckbox />\n      </th>\n      <th *ngFor=\"let column of columns\" [pSortableColumn]=\"column.sort ?? ''\" pReorderableColumn>\n        {{column.name}} <p-sortIcon *ngIf=\"column.sort\" [field]=\"column.sort\" />\n      </th>\n      <th *ngIf=\"actions\" class=\"text-end\" style=\"width:0\"></th>\n    </tr>\n  </ng-template>\n\n  <!-- Table body -->\n  <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n    <tr [pSelectableRow]=\"item\" [pSelectableRowIndex]=\"rowIndex\">\n      <td *ngIf=\"bulkActions?.length\">\n        <p-tableCheckbox [value]=\"item\" />\n      </td>\n      <td *ngFor=\"let column of columns;\">\n        <ng-container [ngTemplateOutlet]=\"column.template ? getTemplate(column.template) : template\"\n          [ngTemplateOutletContext]=\"{ $implicit: item, column }\" />\n      </td>\n      <td class=\"text-end\" *ngIf=\"actions\">\n        <g-action [data]=\"item\" [actions]=\"actions\" />\n      </td>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"emptymessage\">\n    <tr>\n      <td class=\"mat-cell text-center\" [attr.colspan]=\"100\">\n        {{ 'Nessun elemento da visualizzare' }} <!-- // TODO: Translate -->\n      </td>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"paginatorleft\"></ng-template>\n</p-table>\n\n<!-- Table data template -->\n<ng-template #template let-item let-column=\"column\">\n  {{ column.value(item) }}\n\n  <!--@switch (column.type) {\n    @case (DataType.Date) {\n        {{ column.value(item) | date: 'dd/MM/yyyy' }}\n    }\n    @case (DataType.DateTime) {\n        {{ column.value(item) | date: 'dd/MM/yyyy, hh:mm' }}\n    }\n    @case (DataType.Amount) {\n        {{ column.value(item) | currency: 'EUR': 'symbol' : undefined: 'it-IT' }}\n    }\n    @case (DataType.Bool) {\n        {{ column.value(item) ? 'Si': 'No' }}\n    }\n    @default {\n        {{ column.value(item) }}\n    }\n  }-->\n</ng-template>", styles: [":host::ng-deep .p-datatable .p-datatable-tbody>tr>td{padding:.5rem 1rem;height:3.5rem}\n"] }]
        }], ctorParameters: () => [{ type: ColumnTemplates }], propDecorators: { columns: [{
                type: Input
            }], params: [{
                type: Input
            }], actions: [{
                type: Input
            }], tableActions: [{
                type: Input
            }], bulkActions: [{
                type: Input
            }], filters: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], data: [{
                type: Input
            }], changed: [{
                type: Output
            }], onColReordered: [{
                type: Output
            }], templates: [{
                type: ContentChildren,
                args: [ColumnDirective]
            }] } });

class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.0", ngImport: i0, type: TableModule, declarations: [TableComponent], imports: [
            // TODO: Keep only needed!!!
            CommonModule,
            ButtonModule,
            FilterModule,
            ActionModule,
            TableModule$1,
            ColumnDirective,
            ColumnTemplatesDirective], exports: [TableComponent,
            ColumnDirective,
            ColumnTemplatesDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, imports: [
            // TODO: Keep only needed!!!
            CommonModule,
            ButtonModule,
            FilterModule,
            ActionModule,
            TableModule$1] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent
                    ],
                    imports: [
                        // TODO: Keep only needed!!!
                        CommonModule,
                        ButtonModule,
                        FilterModule,
                        ActionModule,
                        TableModule$1,
                        ColumnDirective,
                        ColumnTemplatesDirective
                    ],
                    exports: [
                        TableComponent,
                        ColumnDirective,
                        ColumnTemplatesDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ActionComponent, ActionModule, ColumnDirective, ColumnTemplatesDirective, EDITOR, EditorComponent, EditorModule, EditorService, FilterComponent, FilterModule, OverlayComponent, OverlayModule, PickerComponent, PickerEditorComponent, PickerModule, SortPanelComponent, SortPanelModule, TableComponent, TableModule };
//# sourceMappingURL=ngx-components.mjs.map
