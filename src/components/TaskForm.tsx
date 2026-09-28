import React, { useState, type FC } from "react";
import type { Props } from '../interfaces/task-form';
import '../styles/TaskForm.css';

export const TaskForm: FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    onAddTask(title.trim());
    setTitle('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nueva Tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        <i className="bi bi-plus-lg"></i> Agregar
      </button>
    </form>
  )
}