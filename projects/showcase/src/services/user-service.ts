import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { users } from '../data/users';
import { PagedRequest } from 'ngx-components/src/models/paged-request';
import { PagedList } from 'ngx-components/src/models/paged-list';
import { Observable, of } from 'rxjs';
import { BaseRequest } from 'ngx-components/src/models/base-request';
import * as lodash from 'lodash'; // TODO: Change import

@Injectable({ providedIn: 'root' })
export abstract class UserService {

    // TODO: Create a generic mock of repositoryService
    users: User[];

    constructor() {
        this.users = users;
    }

    search(request?: PagedRequest): Observable<PagedList<User>> {
        // TODO: Filter
        const items = lodash.cloneDeep(this.users);
        console.log(items);
        this.orderBy(items, request?.orderBy?.[0]);
        console.log(request?.orderBy);
        console.log(items);
        return this.getPage(items, request?.pageNumber ?? 1, request?.pageSize ?? 10);
    }

    getAll(request?: BaseRequest): Observable<User[]> {
        // TODO: filter
        const items = lodash.cloneDeep(this.users);
        this.orderBy(items, request?.orderBy?.[0])
        return of(this.users);
    }

    getById(id: number): Observable<User> {
        return of(this.users.find(x => x.id === id)!);
    }

    create(entity: User): Observable<number> {
        this.users.push(entity);
        return of(entity.id);
    }

    update(id: number, entity: User): Observable<void> {
        const index = this.getIndex(entity.id);
        this.users[index] = entity;
        return of(void 0);
    }

    delete(id: number): Observable<void> {
        const index = this.getIndex(id);
        this.users.splice(index, 1);
        return of(void 0);
    }

    private getIndex(id: number) {
        return this.users.findIndex(x => x.id === id);
    }

    private getPage(items: any[], currentPage: number, pageSize: number): Observable<PagedList<any>> {
        const start = (currentPage - 1) * pageSize;
        return of({
            data: items.slice(start, start + pageSize),
            totalPages: Math.floor(items.length / pageSize),
            totalCount: items.length,
            currentPage, pageSize
        });
    }

    private orderBy(items: any[], value?: string) {
        if (!value) return;
        const [field, direction] = value.split(' ');
        items = items.sort((a, b) => {
            if (a[field] < b[field]) return direction === 'desc' ? 1 : -1;
            if (a[field] > b[field]) return direction === 'desc' ? -1 : 1;
            return 0;
        });
    }
}
