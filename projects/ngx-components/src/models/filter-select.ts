import { FilterOption } from "./filter-option";
import { FilterRequest } from "./filter-request";

export interface FilterSelect {
  service?: any; // TODO: Why not RepositoryService?
  label?: (x: any) => string;
  options?: FilterOption[];
  request?: FilterRequest;
}
