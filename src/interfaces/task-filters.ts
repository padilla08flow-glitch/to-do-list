import type { FilterOption } from "./filter-type";

export interface Props {
    currentFilter: FilterOption;
    onFilterChange: (filter: FilterOption) => void;
}