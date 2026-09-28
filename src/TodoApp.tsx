import { CustomHeader } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskFilters } from "./components/TaskFilters";
import { TaskSearch } from "./components/TaskSearch";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./services/useTasks";

export const TodoApp = () => {
  const { filterTasks, filter, search, setFilter, setSearch, handleAddTask, handleActiveTask, HandleDeleteTask } = useTasks();

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <CustomHeader titulo="Mi Lista de Tareas" />
        <TaskForm onAddTask={handleAddTask} />
        <div className="toolbar">
          <TaskFilters currentFilter={filter} onFilterChange={setFilter} />
          <TaskSearch searchItem={search} onSearchChange={setSearch} />
        </div>
        <TaskList tasks={filterTasks} onActiveTask={handleActiveTask} onDeleteTask={HandleDeleteTask} />
      </div>
    </div>
  );
};