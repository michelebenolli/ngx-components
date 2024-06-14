import * as i0 from "@angular/core";
export declare class LocalStorageService {
    setItems(key: string, value?: string[]): void;
    setItem(key: string, value?: string): void;
    getItems(key: string): string[] | undefined;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageService>;
}
