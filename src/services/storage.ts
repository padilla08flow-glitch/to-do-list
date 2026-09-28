import type { Tasks } from "../interfaces/task";

const STORAGE_KEY = 'TODO_LIST_TASK';

export const getStoredTask = (defaultTasks: Tasks[] = []): Tasks[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultTasks;
}

export const saveStoredTask = (tasks: Tasks[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
