import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LocalStorageService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNvbXBvbmVudHMvc3JjL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sbUJBQW1CO0lBRXZCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBZ0I7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWM7UUFDeEMsSUFBSSxLQUFLO1lBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQ3ZDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxHQUFXO1FBQ3pCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXO1FBQ3hCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQVc7UUFDM0IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sS0FBSztRQUNWLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzhHQXpCVSxtQkFBbUI7a0hBQW5CLG1CQUFtQixjQUROLE1BQU07OzJGQUNuQixtQkFBbUI7a0JBRC9CLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgc2V0SXRlbXMoa2V5OiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuc2V0SXRlbShrZXksIHZhbHVlPy5qb2luKCcsJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgZWxzZSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEl0ZW1zKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KT8uc3BsaXQoJywnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==