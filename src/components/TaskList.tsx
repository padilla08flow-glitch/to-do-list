import type { FC } from 'react';
import type { Props } from '../interfaces/task-list';
import { TaskItem } from './TaskItem';
import '../styles/TaskList.css'

export const TaskList: FC<Props> = ({ tasks, onActiveTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No hay tareas disponibles.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onActiveTask={onActiveTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}