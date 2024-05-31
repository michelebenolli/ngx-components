import { FilterOption } from "./filter-option";
import { FilterRequest } from "./filter-request";
export interface FilterSelect {
    service?: any;
    label?: (x: any) => string;
    options?: FilterOption[];
    request?: FilterRequest;
}
