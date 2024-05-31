export interface Action<T = any> {
    name: string;
    icon?: string;
    action?: (x?: any) => any;
    show?: (x?: T) => boolean;
    items?: Action<T>[];
}
