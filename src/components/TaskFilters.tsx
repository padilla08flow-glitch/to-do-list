import type { FC } from 'react';
import type { Props } from '../interfaces/task-filters';
import type { FilterOption } from '../interfaces/filter-type';
import '../styles/TaskFilter.css'

export const TaskFilters: FC<Props> = ({ currentFilter, onFilterChange}) => {
    const options: {label:string; value:FilterOption} [] = [
        { label: 'Todas', value: 'todas'},
        { label: 'Pendientes', value: 'pendientes'},
        { label: 'Completadas', value: 'completadas'},
    ];

    return (
        <div className='filters-container'>
            {options.map((option) => (
                <button key={option.value}
                className={currentFilter === option.value ? 'active': ''}
                onClick={() => onFilterChange(option.value)}>
                {option.label}
                </button>
            ))}
        </div>
    )
}