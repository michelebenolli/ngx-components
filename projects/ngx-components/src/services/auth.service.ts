import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUser } from '../models/current-user';

const CLAIMS = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/';

@Injectable({ providedIn: 'root' })
export class AuthService<TUser = CurrentUser> {

  private token = new BehaviorSubject<string | null>(this.getStorageToken);
  private permissions = new BehaviorSubject<string[]>(this.getStoragePermissions);
  private user = new BehaviorSubject<TUser | undefined>(this.getStorageUser);

  constructor(
    private localStorage: LocalStorageService) { }

  public login(token: Token) {
    this.setStorageToken(token);
  }

  public logout() {
    this.setStorageToken(null);
    //this.router.navigateByUrl('/login'); // TODO: Not here...
  }

  public get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null && !new JwtHelperService().isTokenExpired(token);
  }

  public isAuthorized(permissions: string | string[]): boolean {
    if (!Array.isArray(permissions)) permissions = [permissions];
    if (permissions.length === 0) return true;
    permissions = permissions.map(x => x.toLowerCase());

    const userPermissions = this.getPermissions;
    return !!userPermissions && permissions.every(x => userPermissions.some(y => x === y));
  }

  public get getToken(): string | null {
    return this.token.value;
  }

  public get getPermissions(): string[] {
    return this.permissions.value;
  }

  public get getUser(): TUser | undefined {
    return this.user.value;
  }

  public hasPermission(permission: string): boolean {
    return this.permissions.value.includes(permission);
  }

  private setStorageToken(data: Token | null) {
    // TODO: Data in the correct format for permissions from the backend... remove next line
    const permissions = data?.permissions.map(x => x.replace('Permissions.', '').toLowerCase()) ?? [];
    this.localStorage.setItem('token', data?.token);
    this.localStorage.setItem('refreshToken', data?.refreshToken);
    this.localStorage.setItems('permissions', permissions);

    this.token.next(data?.token ?? null);
    this.permissions.next(permissions);
    this.user.next(this.getStorageUser);
  }

  private get getStorageToken(): string | null {
    return this.localStorage.getItem('token');
  }

  private get getStoragePermissions(): string[] {
    return this.localStorage.getItems('permissions') ?? [];
  }

  // TODO: Simplify model without CLAIMS prefix?
  private get getStorageUser(): TUser | undefined {
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
    } as TUser;
  }
}