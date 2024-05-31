import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseRequest } from '../models/base-request';
import { PagedRequest } from '../models/paged-request';
import { PagedList } from '../models/paged-list';
import { Patch } from '../models/patch';
import * as i0 from "@angular/core";
export declare abstract class RepositoryService<T = any, TId extends number | string = number> {
    protected http: HttpClient;
    protected baseUrl: string;
    constructor(http: HttpClient, baseUrl: string);
    search(request?: PagedRequest): Observable<PagedList<T>>;
    getAll(request?: BaseRequest): Observable<T[]>;
    getById(id: TId): Observable<T>;
    create(entity: T): Observable<TId>;
    createMany(entities: T[]): Observable<void>;
    update(id: TId, entity: T): Observable<void>;
    patch(id: TId, patch: Patch | Patch[]): Observable<void>;
    patchMany(ids: TId[], patch: Patch | Patch[]): Observable<void>;
    delete(id?: TId): Observable<void>;
    deleteMany(ids?: TId[]): Observable<void>;
    sort(ids: number[]): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RepositoryService<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RepositoryService<any, any>>;
}
