import { Confirmation } from "primeng/api";
export interface Action {
    name?: string;
    icon?: string;
    action?: (x?: any) => any;
    confirm?: Confirmation;
    show?: (x?: any) => boolean;
    permissions?: string | string[];
    items?: Action[];
}
