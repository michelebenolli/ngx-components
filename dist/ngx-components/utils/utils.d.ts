import { Filter } from "../models/filter";
import { FilterRequest } from "../models/filter-request";
import { PagedRequest } from "../models/paged-request";
export declare function hasValue(request: FilterRequest): boolean;
export declare function getRequest(filters?: Filter[], pageSize?: number): PagedRequest;
