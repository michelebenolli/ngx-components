import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { users } from '../data/users';

@Injectable({ providedIn: 'root' })
export abstract class UserService {

    users: User[];

    constructor() {
        this.users = users;
    }

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find(x => x.id === id);
    }

    create(entity: User) {
        this.users.push(entity);
    }

    update(entity: User) {
        const index = this.getIndex(entity.id);
        this.users[index] = entity;
    }

    delete(id: number) {
        const index = this.getIndex(id);
        this.users.splice(index, 1);
    }

    private getIndex(id: number) {
        return this.users.findIndex(x => x.id === id);
    }
}
