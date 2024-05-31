import { FilterRequest } from "./filter-request";
import { FilterSelect } from "./filter-select";
export interface Filter {
    type: 'date' | 'hidden' | 'select' | 'text';
    request: FilterRequest;
    label?: string;
    overlay?: boolean;
    select?: FilterSelect;
}
