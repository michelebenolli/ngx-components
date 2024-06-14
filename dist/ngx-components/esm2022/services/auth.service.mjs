import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as i0 from "@angular/core";
import * as i1 from "./local-storage.service";
const CLAIMS = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/';
export class AuthService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, deps: [{ token: i1.LocalStorageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.LocalStorageService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUd0RCxNQUFNLE1BQU0sR0FBRyx3REFBd0QsQ0FBQztBQUd4RSxNQUFNLE9BQU8sV0FBVztJQU10QixZQUNVLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUxuQyxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hFLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRzVCLENBQUM7SUFFekMsS0FBSyxDQUFDLEtBQVk7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsMkRBQTJEO0lBQzdELENBQUM7SUFFRCxJQUFXLGVBQWU7UUFDeEIsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxZQUFZLENBQUMsV0FBOEI7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LFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7WUFDcEMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2hCLENBQUM7SUFDYixDQUFDOzhHQWpGVSxXQUFXO2tIQUFYLFdBQVcsY0FERSxNQUFNOzsyRkFDbkIsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9jdXJyZW50LXVzZXInO1xyXG5cclxuY29uc3QgQ0xBSU1TID0gJ2h0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zLyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2U8VFVzZXIgPSBDdXJyZW50VXNlcj4ge1xyXG5cclxuICBwcml2YXRlIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPih0aGlzLmdldFN0b3JhZ2VUb2tlbik7XHJcbiAgcHJpdmF0ZSBwZXJtaXNzaW9ucyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KHRoaXMuZ2V0U3RvcmFnZVBlcm1pc3Npb25zKTtcclxuICBwcml2YXRlIHVzZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRVc2VyIHwgdW5kZWZpbmVkPih0aGlzLmdldFN0b3JhZ2VVc2VyKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbih0b2tlbjogVG9rZW4pIHtcclxuICAgIHRoaXMuc2V0U3RvcmFnZVRva2VuKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnNldFN0b3JhZ2VUb2tlbihudWxsKTtcclxuICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7IC8vIFRPRE86IE5vdCBoZXJlLi4uXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICByZXR1cm4gdG9rZW4gIT0gbnVsbCAmJiAhbmV3IEp3dEhlbHBlclNlcnZpY2UoKS5pc1Rva2VuRXhwaXJlZCh0b2tlbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBdXRob3JpemVkKHBlcm1pc3Npb25zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBlcm1pc3Npb25zKSkgcGVybWlzc2lvbnMgPSBbcGVybWlzc2lvbnNdO1xyXG4gICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICBwZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zLm1hcCh4ID0+IHgudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgY29uc3QgdXNlclBlcm1pc3Npb25zID0gdGhpcy5nZXRQZXJtaXNzaW9ucztcclxuICAgIHJldHVybiAhIXVzZXJQZXJtaXNzaW9ucyAmJiBwZXJtaXNzaW9ucy5ldmVyeSh4ID0+IHVzZXJQZXJtaXNzaW9ucy5zb21lKHkgPT4geCA9PT0geSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnZXRUb2tlbigpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VuLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnZXRQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy52YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ2V0VXNlcigpOiBUVXNlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VyLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RvcmFnZVRva2VuKGRhdGE6IFRva2VuIHwgbnVsbCkge1xyXG4gICAgLy8gVE9ETzogRGF0YSBpbiB0aGUgY29ycmVjdCBmb3JtYXQgZm9yIHBlcm1pc3Npb25zIGZyb20gdGhlIGJhY2tlbmQuLi4gcmVtb3ZlIG5leHQgbGluZVxyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSBkYXRhPy5wZXJtaXNzaW9ucy5tYXAoeCA9PiB4LnJlcGxhY2UoJ1Blcm1pc3Npb25zLicsICcnKS50b0xvd2VyQ2FzZSgpKSA/PyBbXTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YT8udG9rZW4pO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaFRva2VuJywgZGF0YT8ucmVmcmVzaFRva2VuKTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW1zKCdwZXJtaXNzaW9ucycsIHBlcm1pc3Npb25zKTtcclxuXHJcbiAgICB0aGlzLnRva2VuLm5leHQoZGF0YT8udG9rZW4gPz8gbnVsbCk7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25zLm5leHQocGVybWlzc2lvbnMpO1xyXG4gICAgdGhpcy51c2VyLm5leHQodGhpcy5nZXRTdG9yYWdlVXNlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBnZXRTdG9yYWdlVG9rZW4oKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGdldFN0b3JhZ2VQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbXMoJ3Blcm1pc3Npb25zJykgPz8gW107XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBTaW1wbGlmeSBtb2RlbCB3aXRob3V0IENMQUlNUyBwcmVmaXg/XHJcbiAgcHJpdmF0ZSBnZXQgZ2V0U3RvcmFnZVVzZXIoKTogVFVzZXIgfCB1bmRlZmluZWQge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuO1xyXG4gICAgY29uc3QgdXNlciA9IHRva2VuID8gbmV3IEp3dEhlbHBlclNlcnZpY2UoKS5kZWNvZGVUb2tlbih0b2tlbikgOiBudWxsO1xyXG4gICAgcmV0dXJuICF1c2VyID8gdW5kZWZpbmVkIDoge1xyXG4gICAgICBpZDogdXNlcltDTEFJTVMgKyAnbmFtZWlkZW50aWZpZXInXSxcclxuICAgICAgZmlyc3ROYW1lOiB1c2VyW0NMQUlNUyArICduYW1lJ10sXHJcbiAgICAgIGxhc3ROYW1lOiB1c2VyW0NMQUlNUyArICdzdXJuYW1lJ10sXHJcbiAgICAgIGVtYWlsOiB1c2VyW0NMQUlNUyArICdlbWFpbGFkZHJlc3MnXSxcclxuICAgICAgcGhvbmU6IHVzZXJbQ0xBSU1TICsgJ21vYmlsZXBob25lJ10sXHJcbiAgICAgIHRlbmFudDogdXNlclsndGVuYW50J10sXHJcbiAgICAgIGltYWdlOiB1c2VyWydpbWFnZV91cmwnXVxyXG4gICAgfSBhcyBUVXNlcjtcclxuICB9XHJcbn0iXX0=