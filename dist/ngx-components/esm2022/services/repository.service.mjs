import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RepositoryService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    search(request) {
        return this.http.post(this.baseUrl + 'search', request ?? {});
    }
    getAll(request) {
        return this.http.post(this.baseUrl + 'getAll', request ?? {});
    }
    getById(id, params) {
        return this.http.get(this.baseUrl + id, { params });
    }
    create(entity) {
        return this.http.post(this.baseUrl, entity);
    }
    createMany(entities) {
        return this.http.post(this.baseUrl + 'batch', { models: entities });
    }
    update(id, entity) {
        return this.http.put(this.baseUrl + id, entity);
    }
    patch(id, patch) {
        patch = Array.isArray(patch) ? patch : [patch];
        return this.http.patch(this.baseUrl + id, { id: id, patch: patch });
    }
    patchMany(ids, patch) {
        patch = Array.isArray(patch) ? patch : [patch];
        return this.http.patch(this.baseUrl + 'batch', { ids: ids, patch: patch });
    }
    delete(id) {
        return id ? this.http.delete(this.baseUrl + id) : of(void 0);
    }
    deleteMany(ids) {
        return ids ? this.http.delete(this.baseUrl, { body: { ids: ids } }) : of(void 0);
    }
    sort(ids) {
        return this.http.post(this.baseUrl + 'sort', { ids: ids });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: RepositoryService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: RepositoryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: RepositoryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL3NlcnZpY2VzL3JlcG9zaXRvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU90QyxNQUFNLE9BQWdCLGlCQUFpQjtJQUVyQyxZQUNZLElBQWdCLEVBQ2hCLE9BQWU7UUFEZixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBSSxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxPQUFzQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFlLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBTyxFQUFFLE1BQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFTO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxVQUFVLENBQUMsUUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFPLEVBQUUsTUFBUztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxLQUFLLENBQUMsRUFBTyxFQUFFLEtBQXNCO1FBQ25DLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFVLEVBQUUsS0FBc0I7UUFDMUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVE7UUFDYixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzhHQWxEbUIsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FEYixNQUFNOzsyRkFDVixpQkFBaUI7a0JBRHRDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCYXNlUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9iYXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgeyBQYWdlZFJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcGFnZWQtcmVxdWVzdCc7XHJcbmltcG9ydCB7IFBhZ2VkTGlzdCB9IGZyb20gJy4uL21vZGVscy9wYWdlZC1saXN0JztcclxuaW1wb3J0IHsgUGF0Y2ggfSBmcm9tICcuLi9tb2RlbHMvcGF0Y2gnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlcG9zaXRvcnlTZXJ2aWNlPFQgPSBhbnksIFRJZCBleHRlbmRzIG51bWJlciB8IHN0cmluZyA9IG51bWJlcj4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJvdGVjdGVkIGJhc2VVcmw6IHN0cmluZykgeyB9XHJcblxyXG4gIHNlYXJjaChyZXF1ZXN0PzogUGFnZWRSZXF1ZXN0KTogT2JzZXJ2YWJsZTxQYWdlZExpc3Q8VD4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQYWdlZExpc3Q8VD4+KHRoaXMuYmFzZVVybCArICdzZWFyY2gnLCByZXF1ZXN0ID8/IHt9KTtcclxuICB9XHJcblxyXG4gIGdldEFsbChyZXF1ZXN0PzogQmFzZVJlcXVlc3QpOiBPYnNlcnZhYmxlPFRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFRbXT4odGhpcy5iYXNlVXJsICsgJ2dldEFsbCcsIHJlcXVlc3QgPz8ge30pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnlJZChpZDogVElkLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHRoaXMuYmFzZVVybCArIGlkLCB7IHBhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShlbnRpdHk6IFQpOiBPYnNlcnZhYmxlPFRJZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFRJZD4odGhpcy5iYXNlVXJsLCBlbnRpdHkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFueShlbnRpdGllczogVFtdKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8dm9pZD4odGhpcy5iYXNlVXJsICsgJ2JhdGNoJywgeyBtb2RlbHM6IGVudGl0aWVzIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkOiBUSWQsIGVudGl0eTogVCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8dm9pZD4odGhpcy5iYXNlVXJsICsgaWQsIGVudGl0eSk7XHJcbiAgfVxyXG5cclxuICBwYXRjaChpZDogVElkLCBwYXRjaDogUGF0Y2ggfCBQYXRjaFtdKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBwYXRjaCA9IEFycmF5LmlzQXJyYXkocGF0Y2gpID8gcGF0Y2ggOiBbcGF0Y2hdO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDx2b2lkPih0aGlzLmJhc2VVcmwgKyBpZCwgeyBpZDogaWQsIHBhdGNoOiBwYXRjaCB9KTtcclxuICB9XHJcblxyXG4gIHBhdGNoTWFueShpZHM6IFRJZFtdLCBwYXRjaDogUGF0Y2ggfCBQYXRjaFtdKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBwYXRjaCA9IEFycmF5LmlzQXJyYXkocGF0Y2gpID8gcGF0Y2ggOiBbcGF0Y2hdO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDx2b2lkPih0aGlzLmJhc2VVcmwgKyAnYmF0Y2gnLCB7IGlkczogaWRzLCBwYXRjaDogcGF0Y2ggfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ/OiBUSWQpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiBpZCA/IHRoaXMuaHR0cC5kZWxldGU8dm9pZD4odGhpcy5iYXNlVXJsICsgaWQpIDogb2Yodm9pZCAwKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hbnkoaWRzPzogVElkW10pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiBpZHMgPyB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KHRoaXMuYmFzZVVybCwgeyBib2R5OiB7IGlkczogaWRzIH0gfSkgOiBvZih2b2lkIDApO1xyXG4gIH1cclxuXHJcbiAgc29ydChpZHM6IG51bWJlcltdKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8dm9pZD4odGhpcy5iYXNlVXJsICsgJ3NvcnQnLCB7IGlkczogaWRzIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=