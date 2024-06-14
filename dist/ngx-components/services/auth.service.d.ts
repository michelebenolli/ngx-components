import { Token } from '../models/token';
import { LocalStorageService } from './local-storage.service';
import { CurrentUser } from '../models/current-user';
import * as i0 from "@angular/core";
export declare class AuthService<TUser = CurrentUser> {
    private localStorage;
    private token;
    private permissions;
    private user;
    constructor(localStorage: LocalStorageService);
    login(token: Token): void;
    logout(): void;
    get isAuthenticated(): boolean;
    isAuthorized(permissions: string | string[]): boolean;
    get getToken(): string | null;
    get getPermissions(): string[];
    get getUser(): TUser | undefined;
    hasPermission(permission: string): boolean;
    private setStorageToken;
    private get getStorageToken();
    private get getStoragePermissions();
    private get getStorageUser();
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService<any>>;
}
