import type { FC } from 'react';
import type { Props} from '../interfaces/task-item';
import '../styles/TaskItem.css';

export const TaskItem: FC<Props>= ({task, onActiveTask, onDeleteTask}) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input 
                type='checkbox' 
                checked={task.completed} 
                onChange={() => onActiveTask(task.id)}/>

            <span className='task-title'>{task.title}</span>
            
            <span className={`badge ${task.completed ? 'badge-completed' : 'badge-pending'}`}>
                {task.completed ? 'Completada' : 'Pendiente'}
            </span>
            <button className= 'btn-active' onClick={() => onActiveTask(task.id)}>
                <i className='bi bi-check-lg'></i>
            </button>
            <button className= 'btn-delete' onClick={() => onDeleteTask(task.id)}>
                <i className='bi bi-trash3'></i>
            </button>
        </div>
    )
}