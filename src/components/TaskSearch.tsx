import type {FC} from 'react';
import type {Props} from '../interfaces/task-search';

export const TaskSearch: FC<Props> = ({searchItem, onSearchChange}) => {
    return (
        <div className='search-box'>
            <i className="bi bi-search search-icon"></i>
            <input type="text"
            placeholder="Buscar..."
            value={searchItem}
            onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    )
}